import React from 'react';
import {
  Box, Flex, GridItem, Text,
} from '@chakra-ui/react';
import Product from './Product/Product';

const Products = (props) => {
  const {
    products, addToCart, maxSameItemsOnCart, productIsOnCart, removeItem,
    maxItemsOnCart, totalItems, filterText, isLoading,
  } = props;
  const productsArray = products.filter((product) => product.name.toLowerCase()
    .includes(filterText.toLowerCase()));

  return (
    <>
      <Box position="relative" h="100vh">
        <Flex
          position="relative"
          top="5rem"
          justifyContent="center"
          flexWrap="wrap"
        >

          {isLoading && <Text fontSize="xl" mt={5}>Cargando productos...</Text>}
          {productsArray.length === 0 && isLoading === false ? (
            <Text fontSize="xl" mt={5}>No contamos con el producto que buscas.</Text>
          ) : (
            productsArray.map((product) => (
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
            )))}
        </Flex>
      </Box>
    </>
  );
};

export default Products;
