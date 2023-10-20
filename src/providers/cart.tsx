"use client";

import { Product } from "@prisma/client";
import React, { createContext, ReactNode } from "react";
type CartProduct = {
  product: Product;
} & {
  quantity: number;
};

type CartContext = {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
};

const cartContext = createContext<CartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  return (
    <cartContext.Provider
      value={{
        products: [],
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartProvider;
