import { Reducer } from 'react';
import { TransactionsState, type Action } from '../types';
import { SET_LOADING, SET_TRANSACTIONS } from './actions';

const reducer: Reducer<TransactionsState, Action> = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SET_TRANSACTIONS:
      return {
        ...state,
        isLoading: false,
        transactions: action.payload.transactions,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export default reducer;
