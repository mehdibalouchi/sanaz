import * as types from './mutation-types';
import { processText } from '../../../services/chat-bot';
import uuid4 from 'uuid/v4';
import moment from 'moment'

// actions
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
