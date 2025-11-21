import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
    const email = sessionStorage.getItem("userEmail");
    if (email) {
      const storedCart = localStorage.getItem(`cart_${email}`);
      setCart(storedCart ? JSON.parse(storedCart) : []);
    }
  }, []);

  const updateCart = (newCart) => {
    const email = sessionStorage.getItem("userEmail");
    if (email) localStorage.setItem(`cart_${email}`, JSON.stringify(newCart));
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};
