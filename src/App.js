import React, { useState, useEffect } from 'react';
import { Products, Navbar } from './components';
import CartDrawer from './components/Cart/CartDrawer';
import commerce from './lib/commerce';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const maxSameItemsOnCart = 9;
  const maxItemsOnCart = 30;

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    const response = (await commerce.cart.retrieve());

    setCart(response);
  };

  const removeCartItem = async (productId) => {
    const response = await commerce.cart.remove(productId);

    setCart(response.cart);
  };

  const checkIfProductIsOnCart = (productId) => {
    if (cart.line_items !== undefined) {
      const product = cart.line_items.find((item) => item.product_id === productId);

      if (product === undefined) {
        return false;
      }

      return true;
    }

    return false;
  };

  const addToCart = async (productId, quantity) => {
    const product = await checkIfProductIsOnCart(productId);

    if (product) {
      return;
    }
    const response = await commerce.cart.add(productId, quantity);

    await setCart(response.cart);
  };

  const updateCartQuantity = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });

    setCart(response.cart);
  };

  const emptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <>
      <Navbar />
      <Products
        products={products}
        addToCart={addToCart}
        maxSameItemsOnCart={maxSameItemsOnCart}
        productIsOnCart={checkIfProductIsOnCart}
        removeItem={removeCartItem}
        totalItems={cart.total_items}
        maxItemsOnCart={maxItemsOnCart}
      />
      <CartDrawer
        totalItems={cart.total_items}
        cart={cart}
        maxSameItemsOnCart={maxSameItemsOnCart}
        updateCart={updateCartQuantity}
        removeItem={removeCartItem}
        emptyCart={emptyCart}
        maxItemsOnCart={maxItemsOnCart}
      />
    </>
  );
};

export default App;
