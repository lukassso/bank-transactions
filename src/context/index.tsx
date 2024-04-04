import { FC, createContext, useContext, useReducer, useEffect, type ReactNode } from 'react';
import reducer from './reducer';
import { SET_LOADING, SET_TRANSACTIONS, SET_PAGE } from './actions';
import { TransactionsState } from '../types';

const API_ENDPOINT = '../../api/db.json';

const initalState: TransactionsState = {
  transactions: [],
  isLoading: false,
  currentPage: 1,
  itemsPerPage: 20,
  setPage: (page: number) => {
    page;
  },
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

  const setPage = (page: number) => {
    dispatch({ type: SET_PAGE, payload: { page } });
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return <AppContext.Provider value={{ ...state, setPage }}>{children}</AppContext.Provider>;
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
