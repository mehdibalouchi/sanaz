import * as types from './mutation-types';

// initial state
export const state = {
  input: '',
  inputType: 'text',
  commandSuggestions: [],
  inputSuggestions: [],
};

// mutations
export const mutations = {
  [types.INPUT_CHANGED](state, value) {
    state.input = value;
  },
  [types.INPUT_TYPE_CHANGED](state, value) {
    state.inputType = value;
  },
  [types.LOUD_COMMAND_SUGGESTION](state, value) {
    state.commandSuggestions = [...value];
  },
  [types.LOUD_INPUT_SUGGESTION](state, value) {
    state.inputSuggestions = [...value];
  },
};
