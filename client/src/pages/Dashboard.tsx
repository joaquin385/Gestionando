import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Dashboard: React.FC = () => {
  return (
    <Box p={6}>
      <Heading mb={4}>Dashboard</Heading>
      <Text>Welcome to Gestionando! This is your business management dashboard.</Text>
    </Box>
  );
};

export default Dashboard; 