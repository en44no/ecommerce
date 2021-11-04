import React from 'react';
import {
  Box, Text,
} from '@chakra-ui/react';

const Navbar = () => (
  <>
    <Box
      as="nav"
      display="flex"
      h="5rem"
      top="0"
      left="0"
      right="0"
      zIndex="100"
      position="fixed"
      px="1.5rem"
    >
      <Box
        p={5}
        w="100%"
        display="flex"
        bg="#91D88F"
        justifyContent="space-between"
        boxShadow="lg"
        mt={3}
        borderRadius="9px"
        pt={5}
      >
        <Box>
          <Text fontSize="xl" fontWeight="bold">Almacén</Text>
        </Box>
      </Box>
    </Box>
  </>
);

export default Navbar;