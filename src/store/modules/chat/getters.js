import moment from 'moment'
// getters

export const sortedHistory = function(state) {
  return state.history.sort((item1,item2)=>moment(item1.createdDatetime).diff(moment(item2.createdDatetime), "milliseconds"))
}