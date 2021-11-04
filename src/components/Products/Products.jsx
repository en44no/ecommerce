import React from 'react';
import {
  Box, Grid, GridItem,
} from '@chakra-ui/react';
import Product from './Product/Product';

const Products = (props) => {
  const {
    products, addToCart, maxSameItemsOnCart, productIsOnCart, removeItem,
  } = props;

  return (
    <>
      <Box position="relative" top="6rem" h="200vh" px={5}>
        <Grid
          justifyItems="center"
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(5, 1fr)"
          gap={5}
        >
          {products.map((product) => (
            <GridItem key={product.id}>
              <Product
                product={product}
                addToCart={addToCart}
                maxSameItemsOnCart={maxSameItemsOnCart}
                productIsOnCart={productIsOnCart}
                removeItem={removeItem}
              />

            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Products;
