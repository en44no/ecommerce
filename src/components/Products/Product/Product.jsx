import React from 'react';
import {
  Text, Box, Image, Button,
} from '@chakra-ui/react';
import { MdOutlineAddShoppingCart, MdOutlineDone } from 'react-icons/md';

const Product = (props) => {
  const {
    product, addToCart, productIsOnCart, removeItem,
  } = props;

  return (
    <>
      <Box
        bg="#85C985"
        p="1rem"
        w="17rem"
        borderRadius="9px"
        boxShadow="lg"
        margin={2}
        _hover={{
          transition: 'transform .2s',
          transform: 'scale(1.02)',
        }}
      >
        <Box
          boxShadow="lg"
          bg="#537D53"
          borderRadius="7px"
          py={3}
          display="flex"
          justifyContent="center"
          _hover={{
            transition: 'transform .2s',
            transform: 'scale(1.02)',
          }}
        >
          <Image src={product.image.url} w="100px" h="100px" objectFit="contain" loading="lazy" />
        </Box>
        <Box mt={4} display="flex" justifyContent="space-between">
          <Box>
            <Text fontSize="18px" fontWeight="500">{product.name}</Text>
            <Text
              dangerouslySetInnerHTML={{ __html: product.description }}
              mt={1}
            />
          </Box>
          <Text fontSize="18px" fontWeight="bold">{product.price.formatted_with_symbol}</Text>
        </Box>
        <Button fontSize="15px" boxShadow="lg" disabled={productIsOnCart(product.id) ? 'true' : ''} mt={4} w="100%" onClick={() => (productIsOnCart(product.id) ? removeItem(product.id) : addToCart(product.id, 1))} leftIcon={productIsOnCart(product.id) ? <MdOutlineDone fontSize={20} /> : <MdOutlineAddShoppingCart fontSize={20} />}>{productIsOnCart(product.id) ? 'Agregado a tu carrito' : 'Agregar al carrito'}</Button>
      </Box>
    </>
  );
};

export default Product;
