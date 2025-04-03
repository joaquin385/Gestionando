import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  useToast,
  Grid,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { Transaction, createTransaction, getTransactions, deleteTransaction } from '../services/transactionService';

const FinancialManagement: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<Transaction>();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const toast = useToast();

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const data = await getTransactions();
      setTransactions(data);
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

  const onSubmit = async (data: Transaction) => {
    try {
      await createTransaction(data);
      reset();
      loadTransactions();
      toast({
        title: 'Success',
        description: 'Transaction added successfully',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add transaction',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTransaction(id);
      loadTransactions();
      toast({
        title: 'Transaction deleted',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error deleting transaction',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Heading mb={6}>Financial Management</Heading>

      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        {/* Transaction Form */}
        <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
          <Heading size="md" mb={4}>Add Transaction</Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Type</FormLabel>
                <Select {...register('type')}>
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>Amount</FormLabel>
                <Input
                  type="number"
                  step="0.01"
                  {...register('amount', { required: true })}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input {...register('description', { required: true })} />
              </FormControl>

              <FormControl>
                <FormLabel>Category</FormLabel>
                <Select {...register('category')}>
                  <option value="salary">Salary</option>
                  <option value="sales">Sales</option>
                  <option value="rent">Rent</option>
                  <option value="utilities">Utilities</option>
                  <option value="supplies">Supplies</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              <Button type="submit" colorScheme="blue" width="full">
                Add Transaction
              </Button>
            </VStack>
          </form>
        </Box>

        {/* Transactions List */}
        <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
          <Heading size="md" mb={4}>Recent Transactions</Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Type</Th>
                <Th>Description</Th>
                <Th>Amount</Th>
                <Th>Category</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions.map((transaction) => (
                <Tr key={transaction.id}>
                  <Td>{new Date(transaction.date).toLocaleDateString()}</Td>
                  <Td>{transaction.type}</Td>
                  <Td>{transaction.description}</Td>
                  <Td color={transaction.type === 'income' ? 'green.500' : 'red.500'}>
                    ${transaction.amount.toFixed(2)}
                  </Td>
                  <Td>{transaction.category}</Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      size="sm"
                      onClick={() => handleDelete(transaction.id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Grid>
    </Box>
  );
};

export default FinancialManagement; 