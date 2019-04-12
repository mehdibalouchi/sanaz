// import * as types from './mutation-types';
// import {filterService} from '@/shared/constants';
// import {FilterOptionsRequest} from '@/api/filter_pb'
//
// // actions
// export const addTypeFilter = function ({commit, state}, {value}) {
//   commit(types.ADD_FILTER, {filterName:'typeFilter', value})
// }
// export const addRuleFilter = function ({commit, state}, {value}) {
//   commit(types.ADD_FILTER, {filterName:'ruleFilter', value})
// }
// export const addPositionFilter = function ({commit, state}, {value}) {
//   commit(types.ADD_FILTER, {filterName:'positionFilter', value})
// }
// export const removeTypeFilter = function ({commit, state}, {value}) {
//   commit(types.REMOVE_FILTER, {filterName:'typeFilter', value})
// }
// export const removeRuleFilter = function ({commit, state}, {value}) {
//   commit(types.REMOVE_FILTER, {filterName:'ruleFilter', value})
// }
// export const removePositionFilter = function ({commit, state}, {value}) {
//   commit(types.REMOVE_FILTER, {filterName:'positionFilter', value})
// }
// export const setTypeFilter = function ({commit, state}, typeList) {
//   commit(types.SET_TYPE_FILTER, typeList)
// }
// export const setPositionFilter = function ({commit, state}, positions) {
//   commit(types.SET_POSITION_FILTER, positions)
// }
// export const setOptions = function ({state, commit, rootState}) {
//   let request = new FilterOptionsRequest()
//   request.setCategory(rootState.simulation.selectedSimulation.type)
//   filterService.getFilterOptions(request,{},(err, response)=>{
//     if(err){
//       console.log(err)
//       return
//     }
//     let airctaftTypes = [...response.toObject().typeList]
//     let position = [...response.toObject().positionList]
//     commit(types.SET_TYPE_OPTIONS, airctaftTypes)
//     commit(types.SET_POSITION_OPTIONS, position)
//   })
// }
