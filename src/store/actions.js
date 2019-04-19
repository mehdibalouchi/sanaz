import uuid4 from 'uuid/v4';
import moment from 'moment';

import * as types from './mutation-types';
import { getCommandSuggetions, getInputSuggetions, getSample, processText } from '../services';

// actions
export const loadCommandSuggestions = function({ commit, state }) {
  commit(types.LOUD_COMMAND_SUGGESTION, getCommandSuggetions(state.input));
};
export const loadInputSuggestions = function({ commit, state }) {
  commit(types.LOUD_INPUT_SUGGESTION, getInputSuggetions(state.input));
};

export const changeInputText = function({ dispatch, commit, state }, value) {
  commit(types.INPUT_CHANGED, value);
  dispatch('loadCommandSuggestions');
  dispatch('loadInputSuggestions');
};

export const setSuggestedCommand = function({ dispatch, commit, state, getters }) {
  if (getters.getSuggestedCommand !== '') {
    let sample = getSample(getters.getSuggestedCommand);
    commit(types.INPUT_CHANGED, sample);
    dispatch('loadCommandSuggestions');
    dispatch('loadInputSuggestions');
  }

};

export const setSugesstedInput = function({ dispatch, commit, state, getters }) {
  if (getters.getSuggestedItem !== '') {
    commit(types.INPUT_CHANGED, getters.getSuggestedInput);
    dispatch('loadCommandSuggestions');
    dispatch('loadInputSuggestions');
  }

};

export const sendTextUserMessage = function({ commit, state, dispatch }, messageText) {
  let id = uuid4();
  let now = new moment().toISOString();
  let userMessage = {
    ...messageCaseClass,
    id: id,
    content: messageText,
    contentType: 'text',
    state: null,
    createdDatetime: now,
  };
  commit(types.ADD_MESSAGE, userMessage);
  dispatch('processTextMessage', userMessage);
};

export const sendTextBotMessage = function({ commit, state, getters }, { message, messageType }) {
  let id = uuid4();
  let now = new moment().toISOString();
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

export const processTextMessage = function({ commit, state, dispatch }, userMessage) {
  let result = processText(userMessage.content);
  commit(types.REMOVE_MESSAGE, userMessage.id);
  commit(types.ADD_MESSAGE, { ...userMessage, status: true });
  if (result.message && result.messageType) {
    dispatch('sendTextBotMessage', { message: result.message, messageType: result.messageType });
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
