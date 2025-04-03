import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  description: string;
  category: string;
  date: string;
}

export const createTransaction = async (transaction: Omit<Transaction, 'id' | 'date'>) => {
  const response = await axios.post(`${API_URL}/transactions`, transaction);
  return response.data;
};

export const getTransactions = async () => {
  const response = await axios.get(`${API_URL}/transactions`);
  return response.data;
};

export const updateTransaction = async (id: string, transaction: Partial<Transaction>) => {
  const response = await axios.put(`${API_URL}/transactions/${id}`, transaction);
  return response.data;
};

export const deleteTransaction = async (id: string) => {
  const response = await axios.delete(`${API_URL}/transactions/${id}`);
  return response.data;
}; 