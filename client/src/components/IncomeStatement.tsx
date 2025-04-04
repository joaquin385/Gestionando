import React, { useEffect, useState } from 'react';
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Text,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  useToast,
} from '@chakra-ui/react';
import { getTransactions } from '../services/transactionService';
import { Transaction } from '../services/transactionService';

interface IncomeStatementData {
  totalIncome: number;
  totalExpenses: number;
  netIncome: number;
  period: string;
}

const IncomeStatement: React.FC = () => {
  const [data, setData] = useState<IncomeStatementData>({
    totalIncome: 0,
    totalExpenses: 0,
    netIncome: 0,
    period: 'Current Month',
  });
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const toast = useToast();

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const fetchedTransactions = await getTransactions();
      setTransactions(fetchedTransactions);
      calculateIncomeStatement(fetchedTransactions);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to load transactions',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const calculateIncomeStatement = (transactions: Transaction[]) => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const filteredTransactions = transactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);
      return (
        transactionDate.getMonth() === currentMonth &&
        transactionDate.getFullYear() === currentYear
      );
    });

    const totalIncome = filteredTransactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = filteredTransactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    const netIncome = totalIncome - totalExpenses;

    setData({
      totalIncome,
      totalExpenses,
      netIncome,
      period: `${now.toLocaleString('default', { month: 'long' })} ${currentYear}`,
    });
  };

  return (
    <Box p={6}>
      <Heading mb={6}>Income Statement</Heading>
      
      <Box mb={8}>
        <Text fontSize="lg" mb={4}>
          Period: {data.period}
        </Text>
        
        <Box display="flex" gap={6} mb={8}>
          <Stat>
            <StatLabel>Total Income</StatLabel>
            <StatNumber>${data.totalIncome.toFixed(2)}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              All income sources
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Total Expenses</StatLabel>
            <StatNumber>${data.totalExpenses.toFixed(2)}</StatNumber>
            <StatHelpText>
              <StatArrow type="decrease" />
              All expenses
            </StatHelpText>
          </Stat>

          <Stat>
            <StatLabel>Net Income</StatLabel>
            <StatNumber color={data.netIncome >= 0 ? 'green.500' : 'red.500'}>
              ${data.netIncome.toFixed(2)}
            </StatNumber>
            <StatHelpText>
              <StatArrow type={data.netIncome >= 0 ? 'increase' : 'decrease'} />
              {data.netIncome >= 0 ? 'Profit' : 'Loss'}
            </StatHelpText>
          </Stat>
        </Box>
      </Box>

      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Type</Th>
            <Th>Description</Th>
            <Th>Category</Th>
            <Th isNumeric>Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((transaction) => (
              <Tr key={transaction.id}>
                <Td>{new Date(transaction.date).toLocaleDateString()}</Td>
                <Td>{transaction.type}</Td>
                <Td>{transaction.description}</Td>
                <Td>{transaction.category}</Td>
                <Td isNumeric color={transaction.type === 'income' ? 'green.500' : 'red.500'}>
                  ${transaction.amount.toFixed(2)}
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default IncomeStatement; 