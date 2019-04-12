import * as types from './mutation-types';

// initial state
export const state = {
  history: [{
    id: 1,
    content: 'format A1:A3 date',
    contentType: 'text',
    sender: 'user',
    processed: true,
  },
    {
      id: 2,
      content: 'A1:A2',
      contentType: 'text',
      sender: 'user',
      processed: true,
    },
    {
      id: 3,
      content: { fields: ['A'], items: [{ 'A': '2019-04-01' }, { 'A': '2019-04-02' }] },
      contentType: 'table',
      sender: 'bot',
      processed: null,
    }],
};

// // mutations
export const mutations = {
//   [types.SET_TYPE_FILTER] (state, value) {
//     state.typeFilter = [...value]
//   },
//   [types.SET_POSITION_FILTER] (state, value) {
//     state.positionFilter = [...value]
//   },
//   [types.ADD_FILTER] (state, {filterName, value}) {
//     state[filterName] = [...state[filterName], value]
//   },
//   [types.REMOVE_FILTER] (state, {filterName, value}) {
//     state[filterName] = state[filterName].filter(el => el !== value);
//   },
//   [types.SET_TYPE_OPTIONS] (state, options) {
//     state.typeOptions = [...options]
//   },
//   [types.SET_POSITION_OPTIONS] (state, options) {
//     state.positionOptions = [...options]
//   }
}
