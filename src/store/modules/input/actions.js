import * as types from './mutation-types';
import { getCommandSuggetions, getInputSuggetions } from '../../../services/suggestion';

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