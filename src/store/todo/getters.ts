import {TodoState} from "@/store/todo/index";

export default {
  getNoneCompleted: (state: TodoState) => {
    return state.list.filter(todo => !todo.completed);
  }
};
