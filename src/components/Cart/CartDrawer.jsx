import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import {
  Box,
  Drawer,
  Text,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/hooks';
import Cart from './Cart';

const CartDrawer = (props) => {
  const {
    totalItems,
    cart, maxSameItemsOnCart, updateCart, emptyCart, removeItem, maxItemsOnCart,
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Drawer
        id="holaa"
        size="sm"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent
          id="hola"
          bg="#fff"
          margin={3}
          borderRadius="9px"
          boxShadow="md"
          p={2}
        >
          <DrawerCloseButton color="#000" mt={2} />
          <DrawerHeader color="#000" />
          {totalItems > 0
            && (
              <Text color="#000" fontSize="15px" fontWeight="500" ml={7} mt={-2} pb={1} display="flex" justifyContent="start">
                Seleccionaste
                {' '}
                {totalItems}
                {' '}
                <Text ml={1}>{totalItems > 1 ? 'productos' : 'producto'}</Text>
              </Text>
            )}
          <DrawerBody>
            <Cart
              cart={cart}
              maxSameItemsOnCart={maxSameItemsOnCart}
              updateCart={updateCart}
              removeItem={removeItem}
              emptyCart={emptyCart}
              maxItemsOnCart={maxItemsOnCart}
              totalItems={totalItems}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Box
        position="fixed"
        right="59"
        top="6"
        zIndex="100"
        onClick={onOpen}
        cursor="pointer"
      >
        <Box>
          <Box position="absolute" w="18px" marginTop="-0.5rem" bg="red.500" borderRadius="50%" marginLeft="1.2rem" h="18px">
            <Text color="#fff" fontWeight="500" position="absolute" fontSize="13.5px" bottom="-1px" left={totalItems < 10 ? ('5px') : ('2.3px')}>{totalItems}</Text>
          </Box>
        </Box>
        <Box
          colorScheme="teal"
        >
          <MdShoppingCart color="#fff" fontSize={30} />
        </Box>
      </Box>
    </>
  );
};

export default CartDrawer;
