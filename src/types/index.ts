export interface Transaction {
  id: number;
  amount: number;
  beneficiary: string;
  account: string;
  address: string;
  date: string;
  description: string;
}

export type TransactionsState = {
  transactions: Transaction[];
  isLoading: boolean;
  currentPage: number;
  itemsPerPage: number;
  setPage: (page: number) => void;
};

export interface Action {
  type: string;
  payload?: any;
}
