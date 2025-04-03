import React from 'react';
import { Box, Flex, Heading, Link, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex>
      {/* Sidebar */}
      <Box
        w="250px"
        h="100vh"
        bg="white"
        boxShadow="md"
        p={4}
        position="fixed"
      >
        <VStack align="stretch" spacing={4}>
          <Heading size="md" mb={6}>Gestionando</Heading>
          <Link as={RouterLink} to="/" p={2} _hover={{ bg: 'gray.100' }}>
            Dashboard
          </Link>
          <Link as={RouterLink} to="/financial" p={2} _hover={{ bg: 'gray.100' }}>
            Financial Management
          </Link>
          <Link as={RouterLink} to="/reports" p={2} _hover={{ bg: 'gray.100' }}>
            Reports
          </Link>
          <Link as={RouterLink} to="/settings" p={2} _hover={{ bg: 'gray.100' }}>
            Settings
          </Link>
        </VStack>
      </Box>

      {/* Main Content */}
      <Box ml="250px" flex="1" p={8}>
        {children}
      </Box>
    </Flex>
  );
};

export default Layout; 