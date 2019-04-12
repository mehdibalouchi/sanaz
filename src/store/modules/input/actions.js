import * as types from './mutation-types';
import { getCommandSuggetions, getInputSuggetions, getSample } from '../../../services/suggestion';

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
  }

};

export const setSugesstedInput = function({ dispatch, commit, state, getters }) {
  if (getters.getSuggestedItem !== '')
    commit(types.INPUT_CHANGED, getters.getSuggestedInput);
};