import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import {Todo} from "@/Models";

export interface TodoState {
  list: Todo[];
  loading: boolean;
  error?: string | null,
}

const state: TodoState = {
  list: [],
  loading: false,
  error: null
};


export default {
  state,
  mutations,
  actions,
  getters,
};

// https://github.com/kopterio/vue-auth-cognito/blob/master/src/actions.js
