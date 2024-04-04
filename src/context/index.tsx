import { FC, createContext, useContext, useReducer, useEffect, type ReactNode } from 'react';
import reducer from './reducer';
import { SET_LOADING, SET_TRANSACTIONS } from './actions';
import { TransactionsState } from '../types';

const API_ENDPOINT = '../../api/db.json';

const initalState: TransactionsState = {
  transactions: [],
  isLoading: false,
};

const AppContext = createContext<TransactionsState>(initalState);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const fetchApiData = async () => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(API_ENDPOINT);
      const data = await response.json();
      dispatch({
        type: SET_TRANSACTIONS,
        payload: {
          transactions: data.transactions,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiData();
  }, []);

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
