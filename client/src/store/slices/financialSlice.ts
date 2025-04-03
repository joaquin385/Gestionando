import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  date: string;
  category: string;
}

interface FinancialState {
  transactions: Transaction[];
  balance: number;
  loading: boolean;
  error: string | null;
}

const initialState: FinancialState = {
  transactions: [],
  balance: 0,
  loading: false,
  error: null,
};

const financialSlice = createSlice({
  name: 'financial',
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      state.transactions.push(action.payload);
      state.balance += action.payload.type === 'income' 
        ? action.payload.amount 
        : -action.payload.amount;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setTransactions: (state, action: PayloadAction<Transaction[]>) => {
      state.transactions = action.payload;
      state.balance = action.payload.reduce((total, transaction) => {
        return total + (transaction.type === 'income' ? transaction.amount : -transaction.amount);
      }, 0);
    },
  },
});

export const { addTransaction, setLoading, setError, setTransactions } = financialSlice.actions;
export default financialSlice.reducer; 