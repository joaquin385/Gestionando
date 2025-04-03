import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import FinancialManagement from './pages/FinancialManagement';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/financial" element={<FinancialManagement />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </ChakraProvider>
  );
};

export default App; 