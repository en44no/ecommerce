import React from 'react';
import {
  Box, Text, Grid,
} from '@chakra-ui/react';
import Search from './Search';

const Navbar = (props) => {
  const { searchProduct } = props;

  return (
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
          display="flex"
        >
          <Grid templateColumns="repeat(5, 1fr)" gap={6} w="100%">
            <Box w="100%" h="10">
              <Text fontSize="xl" color="#fff" fontWeight="bold" mt={1} ml={10}>Almacén</Text>
            </Box>
            <Box />
            <Box w="100%" h="10">
              <Search searchProduct={searchProduct} w="100%" />
            </Box>
            <Box />
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
