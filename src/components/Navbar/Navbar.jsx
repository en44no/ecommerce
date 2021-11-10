import React from 'react';
import {
  Box, Text,
} from '@chakra-ui/react';

const Navbar = () => (
  <>
    <Box
      as="nav"
      h="5rem"
      top="0"
      left="0"
      right="0"
      zIndex="100"
      position="fixed"
    >
      <Box
        p={5}
        w="100%"
        bg="#2D7EA0"
        pt={5}
        boxShadow="lg"
      >
        <Box ml={10}>
          <Text fontSize="xl" color="#fff" fontWeight="bold">Almacén</Text>
        </Box>
      </Box>
    </Box>
  </>
);

export default Navbar;
