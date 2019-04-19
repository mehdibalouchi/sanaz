import * as types from './mutation-types';

// initial state
export const state = {
  history: [],
};

// // mutations
export const mutations = {
  [types.ADD_MESSAGE](state, value) {
    state.history = [...state.history, value];
  },
  [types.REMOVE_MESSAGE](state, messageId) {
    state.history = [...state.history.filter((item)=>item.id !== messageId)]
  },
};
