import React from 'react';
import {
  Box, Image, Text, Button,
} from '@chakra-ui/react';

const CartItem = (props) => {
  const {
    item, maxSameItemsOnCart, updateCart, removeItem,
  } = props;

  return (
    <Box
      p="5"
      bg="#85C985"
      borderRadius="9px"
      mb={3}
      boxShadow="lg"
      _hover={{
        transition: 'transform .2s',
        transform: 'scale(1.02)',
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Box display="flex">
          <Box
            py={1.5}
            w="3rem"
            boxShadow="lg"
            bg="#537D53"
            borderRadius="7px"
            display="flex"
            justifyContent="center"
            _hover={{
              transition: 'transform .2s',
              transform: 'scale(1.04)',
            }}
          >
            <Image src={item.image.url} w="auto" h="2rem" objectFit="contain" />
          </Box>
          <Text fontSize="17px" mt={2} ml={2} fontWeight="500">{item.name}</Text>
        </Box>
        <Text fontSize="17px" fontWeight="bold" mt={2}>{item.line_total.formatted_with_symbol}</Text>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={4}>
        <Box display="flex" bg="#E2E8F0" borderRadius="9px" boxShadow="lg">
          <Button fontSize="xl" fontWeight="bold" h={9} onClick={() => updateCart(item.id, item.quantity - 1, true)}>-</Button>
          <Text px={2} fontSize="md" fontWeight="500" mt={1.5}>{item.quantity}</Text>
          <Button
            fontWeight="bold"
            fontSize="xl"
            h={9}
            onClick={() => updateCart(item.id, item.quantity
            < maxSameItemsOnCart ? item.quantity + 1
              : item.quantity)}
          >
            +

          </Button>
        </Box>
        <Button boxShadow="lg" h={9} onClick={() => removeItem(item.id)}>Quitar</Button>
      </Box>
    </Box>
  );
};

export default CartItem;
