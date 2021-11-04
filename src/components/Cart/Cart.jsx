import React from 'react';
import {
  Box, Button, Link, Text,
} from '@chakra-ui/react';
import { BsWhatsapp } from 'react-icons/bs';
import CartItem from './CartItem/CartItem';

const Cart = (props) => {
  const {
    cart, maxSameItemsOnCart, updateCart, emptyCart, removeItem,
  } = props;
  const isEmpty = !cart.line_items.length;
  const text = cart.line_items.map((item) => `\n * ${item.quantity} ${item.name} - ${item.line_total.formatted_with_symbol}\n`).concat(`\n T O T A L: ${cart.subtotal.formatted_with_symbol}`);

  const cartWithProducts = () => (
    <>
      <Box>
        {cart.line_items.map((item) => (
          <>
            <CartItem
              item={item}
              maxSameItemsOnCart={maxSameItemsOnCart}
              updateCart={updateCart}
              removeItem={removeItem}
            />
          </>
        ))}
      </Box>
      <Box>
        <Text fontSize="lg" fontWeight="bold" textAlign="right">
          Total:
          {` ${cart.subtotal.formatted_with_symbol}`}
        </Text>
      </Box>
      <Box mt={3} position="relative" bottom="0" display="flex" justifyContent="space-between">
        <Button boxShadow="lg" onClick={emptyCart}>
          Vaciar carrito
        </Button>
        <Link isExternal href={`https://wa.me/59894018406?text=${encodeURIComponent(`Hola! Quisiera pedir: ${text}`)}`}>
          <Button leftIcon={<BsWhatsapp size="1.1rem" />} boxShadow="lg" colorScheme="whatsapp">
            Terminar pedido
          </Button>
        </Link>
      </Box>
    </>
  );

  return (
    <>
      <Box />
      {isEmpty ? <Text fontSize="lg" textAlign="center">No tienes productos aún.</Text> : cartWithProducts()}
    </>
  );
};

export default Cart;
