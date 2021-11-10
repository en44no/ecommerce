import React from 'react';
import {
  Box, Image, Text, Button,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/toast';
import Notification from '../../Notification';

const CartItem = (props) => {
  const toast = useToast();
  const {
    item, maxSameItemsOnCart, updateCart, removeItem, maxItemsOnCart, totalItems,
  } = props;

  const handleUpdateCart = () => {
    const sameItemsOnCartId = 'same-items';
    const maxItemsOnCartId = 'max-items';

    if (item.quantity === maxSameItemsOnCart) {
      if (!toast.isActive(sameItemsOnCartId)) {
        Notification(
          'Error al agregar el producto.',
          `No puedes agregar más de ${maxSameItemsOnCart} productos iguales.`, sameItemsOnCartId,
        );
      }
    } else if (maxItemsOnCart === totalItems) {
      if (!toast.isActive(maxItemsOnCartId)) {
        Notification(
          'Error al agregar el producto.',
          `No puedes agregar más de ${maxItemsOnCart} productos.`, maxItemsOnCartId,
        );
      }
    } else {
      updateCart(item.id, item.quantity + 1);
    }
  };

  return (
    <Box
      p="5"
      bg="#2D7FA1"
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
            bg="#658FA1"
            borderRadius="7px"
            display="flex"
            justifyContent="center"
            _hover={{
              transition: 'transform .2s',
              transform: 'scale(1.04)',
            }}
          >
            <Image src={item.image.url} w="auto" h="2rem" objectFit="contain" loading="lazy" />
          </Box>
          <Text color="#fff" fontSize="17px" mt={2} ml={2} fontWeight="500">{item.name}</Text>
        </Box>
        <Text color="#fff" fontSize="17px" fontWeight="bold" mt={2}>{item.line_total.formatted_with_symbol}</Text>
      </Box>
      <Box display="flex" justifyContent="space-between" mt={4}>
        <Box display="flex" bg="#E2E8F0" borderRadius="9px" boxShadow="lg">
          <Button fontSize="xl" fontWeight="bold" h={9} color="#000" onClick={() => updateCart(item.id, item.quantity - 1, true)}>-</Button>
          <Text px={2} fontSize="md" fontWeight="500" mt={1.5} color="#000">{item.quantity}</Text>
          <Button
            fontWeight="bold"
            fontSize="xl"
            h={9}
            color="#000"
            onClick={handleUpdateCart}
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
