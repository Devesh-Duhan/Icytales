"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart =
      typeof window !== "undefined"
        ? localStorage.getItem("icytales_cart")
        : null;
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("icytales_cart", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addItem = (product, quantity = 1) => {
    setCartItems((current) => {
      const found = current.find((item) => item.id === product.id);
      if (found) {
        return current.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + quantity } : item,
        );
      }
      return [...current, { ...product, qty: quantity }];
    });
  };

  const removeItem = (id) => {
    setCartItems((current) => current.filter((item) => item.id !== id));
  };

  const updateQty = (id, quantity) => {
    setCartItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, quantity) } : item,
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0,
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addItem, removeItem, updateQty, clearCart, subtotal }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
