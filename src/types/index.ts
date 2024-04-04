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
};

export interface Action {
  type: string;
  payload?: any;
}
