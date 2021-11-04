import React from 'react';
import {
  Box, Flex, GridItem, Text,
} from '@chakra-ui/react';
import Product from './Product/Product';

const Products = (props) => {
  const {
    products, addToCart, maxSameItemsOnCart, productIsOnCart, removeItem,
  } = props;

  return (
    <>
      <Box position="relative" top="5.5rem" h="100vh" px={5}>
        <Flex
          justifyContent="center"
          flexWrap="wrap"
        >
          {!products ? <Text fontSize="2xl" fontWeight="500" mt={5}>Actualmente no contamos con productos.</Text> : (
            products.map((product) => (
              <GridItem key={product.id}>
                <Product
                  product={product}
                  addToCart={addToCart}
                  maxSameItemsOnCart={maxSameItemsOnCart}
                  productIsOnCart={productIsOnCart}
                  removeItem={removeItem}
                />

              </GridItem>
            ))
          )}

        </Flex>
      </Box>
    </>
  );
};

export default Products;
