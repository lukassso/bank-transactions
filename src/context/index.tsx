import { FC, createContext, useContext, useReducer, useEffect, type ReactNode } from 'react';
import reducer from './reducer';
import { SET_LOADING, SET_TRANSACTIONS, SET_PAGE, SET_FILTERED_TRANSACTIONS } from './actions';
import { TransactionsState } from '../types';

const API_ENDPOINT = '../../api/db.json';

const initalState: TransactionsState = {
  transactions: [],
  isLoading: false,
  currentPage: 1,
  itemsPerPage: 20,
  setPage: (page) => {
    page;
  },
  handleSearch: (query: string) => {
    query;
  },
  query: '',
  deleteTransaction: (id: number) => {
    id;
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

  const setPage = (page: number): void => {
    dispatch({ type: SET_PAGE, payload: { page } });
  };

  const handleSearch = (query: string): void => {
    dispatch({ type: SET_FILTERED_TRANSACTIONS, payload: { query } });
  };

  const deleteTransaction = (id: number): void => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: { id } });
  };

  useEffect(() => {
    fetchApiData();
  }, [state.query, state.currentPage]);

  return (
    <AppContext.Provider value={{ ...state, setPage, handleSearch, deleteTransaction }}>{children}</AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
