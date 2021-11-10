import React from 'react';
import {
  Box, Flex, GridItem, Text,
} from '@chakra-ui/react';
import Product from './Product/Product';

const Products = (props) => {
  const {
    products, addToCart, maxSameItemsOnCart, productIsOnCart, removeItem,
    maxItemsOnCart, totalItems,
  } = props;

  return (
    <>
      <Box position="relative" h="100vh">
        <Flex
          position="relative"
          top="5rem"
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
                  maxItemsOnCart={maxItemsOnCart}
                  totalItems={totalItems}
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
