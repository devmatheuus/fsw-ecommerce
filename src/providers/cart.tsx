"use client";

import { ProductWithTotalPrice } from "@/helpers/product";
import React, { createContext, ReactNode, useState } from "react";

export type CartProduct = ProductWithTotalPrice & { quantity: number };

type CartContextType = {
  products: CartProduct[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  addProductToCart: (product: CartProduct) => void;
};

export const CartContext = createContext<CartContextType>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  addProductToCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const addProductToCart = (product: CartProduct) => {
    const productAlreadyOnCart = products.some(
      (productCart) => productCart.id === product.id,
    );

    if (productAlreadyOnCart) {
      setProducts((prev) =>
        prev.map((productCart) => {
          if (productCart.id === product.id) {
            return {
              ...productCart,
              quantity: productCart.quantity + product.quantity,
            };
          }

          return productCart;
        }),
      );

      return;
    }

    setProducts((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
