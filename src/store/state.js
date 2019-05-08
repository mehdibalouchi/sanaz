import * as types from './mutation-types';
import TFX_SAMPLE from '../assets/tfx-sample';

// initial state
export const state = {
  input: '',
  inputType: 'text',
  isAudioRecording: false,
  commandSuggestions: [],
  inputSuggestions: [],
  history: [],
  inputHistory: [''],
  selectedInputHistoryIndex: 0,
  inputHistoryLimit: 5,
  availableCommand: [],
  state: TFX_SAMPLE,
};

// mutations
export const mutations = {
  [types.INPUT_CHANGED](state, value) {
      state.input = value;
  },
  [types.INPUT_TYPE_CHANGED](state, value) {
    state.inputType = value;
  },
  [types.SET_SELECTED_INPUT_HISTORY](state, value) {
    state.selectedInputHistoryIndex = value;
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
  [types.REMOVE_MESSAGE](state, messageId) {
    state.history = [...state.history.filter((item) => item.id !== messageId)];
  },
  [types.ADD_INPUT_HISTORY](state, value) {
    state.inputHistory = [value, ...state.inputHistory.slice(0, state.inputHistoryLimit + 1)];
    console.log(state.inputHistory);
  },
  [types.UPDDATE_INPUT_HISTORY_ITEM](state, value) {
    console.log([...state.inputHistory.slice(0, state.selectedInputHistoryIndex), value, ...state.inputHistory.slice(state.selectedInputHistoryIndex + 1)]);
    state.inputHistory = [...state.inputHistory.slice(0, state.selectedInputHistoryIndex), value, ...state.inputHistory.slice(state.selectedInputHistoryIndex + 1)];
  }
};
