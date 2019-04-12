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
  return state.input.substring(0, state.input.lastIndexOf(' ')) + ' ' + (state.inputSuggestions.length > 0 ? state.inputSuggestions[0] : '');
};
