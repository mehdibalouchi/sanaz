import uuid4 from 'uuid/v4';
import moment from 'moment';
import TFX_SAMPLE from '../assets/tfx-sample';

import * as types from './mutation-types';
import { getCommandSuggetions, getInputSuggetions, getSample, processInput } from '../services/tfxi';

// actions
export const loadCommandSuggestions = function({ commit, state }) {
  commit(types.LOUD_COMMAND_SUGGESTION, getCommandSuggetions(state.input));
};
export const loadInputSuggestions = function({ commit, state }) {
  commit(types.LOUD_INPUT_SUGGESTION, getInputSuggetions(state.input));
};

export const clearInput = function({ commit, state, dispatch }) {
  if (state.inputHistory[0].length > 0) {
    commit(types.SET_SELECTED_INPUT_HISTORY, null);
    commit(types.ADD_INPUT_HISTORY, '');
  }
  commit(types.SET_SELECTED_INPUT_HISTORY, 0);
  commit(types.INPUT_CHANGED, '');
  dispatch('loadCommandSuggestions');
  dispatch('loadInputSuggestions');
};

export const navigateCommandHistory = function({ dispatch, commit, state, getters }, value) {
  if (value && value === 'up' && state.selectedInputHistoryIndex < state.inputHistory.length) {
    commit(types.SET_SELECTED_INPUT_HISTORY, state.selectedInputHistoryIndex + 1);
    dispatch('changeInputText', state.inputHistory[state.selectedInputHistoryIndex]);

  } else if (value && value === 'down' && state.selectedInputHistoryIndex > 0) {
    commit(types.SET_SELECTED_INPUT_HISTORY, state.selectedInputHistoryIndex - 1);
    dispatch('changeInputText', state.inputHistory[state.selectedInputHistoryIndex]);
  } else {
    console.log('you reach the history index limit');
  }
};

export const changeInputText = function({ dispatch, commit, state }, value) {
  commit(types.INPUT_CHANGED, value);
  commit(types.UPDDATE_INPUT_HISTORY_ITEM, value);
  dispatch('loadCommandSuggestions');
  dispatch('loadInputSuggestions');
};

export const setSuggestedCommand = function({ dispatch, commit, state, getters }) {
  if (getters.getSuggestedCommand !== '') {
    dispatch('changeInputText', getters.getSuggestedCommand);
  }

};

export const setSugesstedInput = function({ dispatch, commit, state, getters }) {
  if (getters.getSuggestedItem !== '') {
    let part = state.input.split(' ').slice(0, -1).join(' ') + ' ';
    if (part === ' ') {
      part = '';
    }
    console.log(part);
    console.log(getters.getSuggestedInput);
    dispatch('changeInputText', part + getters.getSuggestedInput);
  }

};

export const sendUserMessage = function({ dispatch, commit, state }) {
  if (state.inputType === 'text' && typeof state.input === 'string' && state.input.length > 0) {
    dispatch('sendTextUserMessage');
  } else if (state.inputType === 'audio' && !state.isAudioRecording) {
    dispatch('sendAudioUserMessage');
  } else {
    console.log('requested action not allowed');
  }

};


export const sendTextUserMessage = function({ commit, state, dispatch }) {
  let id = uuid4();
  let now = moment().toISOString();
  let userMessage = {
    ...messageCaseClass,
    id: id,
    content: state.input,
    contentType: 'text',
    state: null,
    createdDatetime: now,
  };
  commit(types.ADD_MESSAGE, userMessage);
  dispatch('clearInput', userMessage);
  dispatch('processMessage', userMessage);
};


export const sendTextBotMessage = function({ commit, state, getters }, { message, messageType }) {
  let id = uuid4();
  let now = moment().toISOString();
  let botMessage = {
    ...messageCaseClass,
    id: id,
    content: message,
    contentType: messageType,
    sender: 'bot',
    state: null,
    createdDatetime: now,
  };
  commit(types.ADD_MESSAGE, botMessage);
};

export const processMessage = function({ commit, state, dispatch }, userMessage) {
  let result = processInput(userMessage.content, TFX_SAMPLE);
  if (result) {
    dispatch('sendTextBotMessage', { message: result, messageType: 'text' });
  }
};


const messageCaseClass = {
  id: 0,
  content: '',
  contentType: 'text',
  sender: 'user',
  status: null,
  createdDatetime: null,
};

/// for simplicity of implimention for now we handle recording in input-box component
/// TODO: move recording to state
export const startRecording = function({ commit, state }) {
  commit(types.INPUT_TYPE_CHANGED, 'audio');
  commit(types.TOGGLE_RECORDING);
};

export const stopRecording = function({ commit, state }, audio) {
  commit(types.INPUT_CHANGED, audio);
  commit(types.TOGGLE_RECORDING);
};

export const sendAudioUserMessage = function({ commit, state, dispatch }) {
  // let id = uuid4();
  // let now = moment().toISOString();
  // let userMessage = {
  //   ...messageCaseClass,
  //   id: id,
  //   content: state.input,
  //   contentType: 'audio',
  //   state: null,
  //   createdDatetime: now,
  // };
  // commit(types.ADD_MESSAGE, userMessage);
  // commit(types.INPUT_TYPE_CHANGED, 'text');
  // dispatch('processMessage', userMessage);
  // dispatch('changeInputText', '');
};