import React from 'react';
import { Box, Heading, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import IncomeStatement from '../components/IncomeStatement';

const Reports: React.FC = () => {
  return (
    <Box p={6}>
      <Heading mb={6}>Reports</Heading>
      
      <Tabs variant="enclosed">
        <TabList>
          <Tab>Income Statement</Tab>
          <Tab>Balance Sheet</Tab>
          <Tab>Cash Flow</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <IncomeStatement />
          </TabPanel>
          <TabPanel>
            <Box p={4}>
              <Heading size="md" mb={4}>Balance Sheet</Heading>
              <p>Balance sheet content coming soon...</p>
            </Box>
          </TabPanel>
          <TabPanel>
            <Box p={4}>
              <Heading size="md" mb={4}>Cash Flow Statement</Heading>
              <p>Cash flow content coming soon...</p>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Reports; 