import * as types from './mutation-types';

// initial state
export const state = {
  input: '',
  inputType: 'text',
  isAudioRecording: false,
  commandSuggestions: [],
  inputSuggestions: [],
  history: [],
  inputHistory: [],
};

// mutations
export const mutations = {
  [types.INPUT_CHANGED](state, value) {
    state.input = value;
  },
  [types.INPUT_TYPE_CHANGED](state, value) {
    state.inputType = value;
  },
  [types.TOGGLE_RECORDING](state) {
    state.isAudioRecording = !state.isAudioRecording;
  },
  [types.LOUD_COMMAND_SUGGESTION](state, value) {
    state.commandSuggestions = [...value];
  },
  [types.LOUD_INPUT_SUGGESTION](state, value) {
    state.inputSuggestions = [...value];
  },
  [types.ADD_MESSAGE](state, value) {
    state.history = [...state.history, value];
  },
  [types.ADD_INPUT_HISTORY](state, value) {
    state.inputHistory = [value, ...state.history.slice(0, 6)];
  },
  [types.REMOVE_MESSAGE](state, messageId) {
    state.history = [...state.history.filter((item)=>item.id !== messageId)]
  }
};
