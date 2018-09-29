import {TODO_LIST, UPDATE, ERROR, CREATE, LOADING} from './mutation-types';
import { Commit, Store } from 'vuex'
import {Todo} from "@/Models";
import axios, {AxiosResponse} from "axios";
import {TodoState} from "@/store/todo/index";

const baseUrl = process.env.NODE_ENV === "production" ? "https://gu-ci-backend.herokuapp.com" : "https://test-gu-ci-backend.herokuapp.com/";

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});


export default {
  async fetchAll(context: { commit: Commit}) {
    context.commit(LOADING, true)
    try {
      const response: AxiosResponse<Array<Todo>> = await axiosInstance.get('/todos');
      if(response.status == 200) {
        context.commit(TODO_LIST, response.data)
      } else {
        context.commit(ERROR, response.statusText)
      }
    } catch(e) {
      context.commit(ERROR, e.message)
    }
  },
  async createTodo(context: { commit: Commit}, todoTitle: string) {
    const todoResponse: AxiosResponse<Array<Todo>> = await axiosInstance.post('/todos', {title: todoTitle, completed: false});
    if(todoResponse.status == 201) {
      context.commit(CREATE, todoResponse.data)
    } else {
      context.commit(ERROR, todoResponse.statusText)
    }
  },
  async markComplete(context: { commit: Commit, state: TodoState }, todo: Todo) {
    const updatedTodo: Todo = {
      id: todo.id,
      title: todo.title,
      completed: !todo.completed
    };
    context.commit(UPDATE, updatedTodo);

    const apiResponse: AxiosResponse<Todo> = await axiosInstance.patch(`/todos/${todo.id}`, updatedTodo);
    if(apiResponse.status !== 200) {
      context.commit(ERROR, apiResponse.statusText);
      context.commit(UPDATE, todo);
    }
  }
};
