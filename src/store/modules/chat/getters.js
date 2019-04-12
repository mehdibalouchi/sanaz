// getters

export const sortedHistory = function(state) {
  return state.history.sort((item1,item2)=>item1.createdDatetime-item2.createdDatetime)
}