import {TODO_LIST, ERROR, CREATE, UPDATE} from './mutation-types';
import {Todo} from "@/Models";
import {TodoState} from "@/store/todo/index";

export default {
  [TODO_LIST](state: TodoState, payload: Todo[]) {
    state.list = payload;
    state.loading = false;
    state.error = null;
  },
  [ERROR](state: TodoState, payload: string) {
    state.error = payload;
  },
  [UPDATE](state: TodoState, payload: Todo) {
    const index = state.list.findIndex((todo => todo.id == payload.id));
    if(index > -1) {
      state.list[index] = payload
    }
    state.list = [...state.list]
  },
  [CREATE](state: TodoState, payload: Todo) {
    state.list = [...state.list, ...[payload]]
  }
};
