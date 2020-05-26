import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

export default function (state = initialState, action) {
  //destructor to pull out type and payload from action
  const { type, payload } = action;
  switch (type) {
    case 'SET_ALERT':
      //spread operator from parameter arg (state)
      return [...state, payload];
    case 'REMOVE_ALERT':
      return state.filter((alert) => alert.id !== payload);
    default:
      return state;
  }
}
