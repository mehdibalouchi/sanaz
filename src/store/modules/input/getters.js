// // getters
export const getSuggestedCommand = function (state) {
 if(state.input.length<2){
  return ''
 }
 return state.commandSuggestions[0]
};

export const getSuggestedInput = function (state) {
  if(state.input.length<2){
    return ''
  }
 return state.inputSuggestions[0]
};
