import moment from 'moment';

// // getters
export const getSuggestedCommand = function(state) {
  if (state.input.length < 2 || state.commandSuggestions.length === 0) {
    return '';
  }
  return state.commandSuggestions[0];
};

export const getSuggestedItem = function(state) {
  if (state.input.length < 2 || state.inputSuggestions.length === 0) {
    return '';
  }
  return state.inputSuggestions[0];
};

export const getSuggestedInput = function(state) {
  return state.inputSuggestions.length > 0 ? state.inputSuggestions[0] : '';
};

export const sortedHistory = function(state) {
  return state.history.sort((item1, item2) => moment(item1.createdDatetime).diff(moment(item2.createdDatetime), 'milliseconds'));
};


export const selectedInputHistory = function(state) {
  return state.inputHistory[1];
};