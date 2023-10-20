"use client";

import React, { useState, useContext } from "react";
import { ProductWithTotalPrice } from "@/helpers/product";
import numberFormatter from "@/helpers/numberFormatter";
import { ArrowLeftIcon, ArrowRightIcon, TruckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import DiscountBadge from "@/components/ui/DiscountBadge";
import { CartContext } from "@/providers/cart";

type ProductInfoProps = {
  product: ProductWithTotalPrice;
};

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { addProductToCart } = useContext(CartContext);

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity === 1 ? 1 : prevQuantity - 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleAddToCart = () => {
    addProductToCart({ ...product, quantity });
  };

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{product.name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">
          {numberFormatter(product.totalPrice)}
        </h1>

        {product.discountPercentage > 0 && (
          <DiscountBadge>
            <span>{product.discountPercentage}</span>
          </DiscountBadge>
        )}
      </div>
      {product.discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          {numberFormatter(+product.basePrice)}
        </p>
      )}

      <div className="mt-4 flex items-center gap-2">
        <Button
          size="icon"
          variant="outline"
          onClick={handleDecreaseQuantity}
          disabled={quantity === 1}
        >
          <ArrowLeftIcon size={16} />
        </Button>
        <span>{quantity}</span>
        <Button size="icon" variant="outline" onClick={handleIncreaseQuantity}>
          <ArrowRightIcon size={16} />
        </Button>
      </div>

      <div className="mt-8 flex flex-col gap-3">
        <h3 className="font-bold">Descrição</h3>
        {product.description.split("\n").map((paragraph, index) => (
          <p key={index} className="text-justify text-sm opacity-60">
            {paragraph}
          </p>
        ))}
      </div>

      <Button className="mt-8 font-bold uppercase" onClick={handleAddToCart}>
        Adicionar ao carrinho
      </Button>

      <div className="mt-5 flex items-center justify-between rounded-lg bg-accent px-5 py-2">
        <div className="flex items-center gap-2">
          <TruckIcon />

          <div className="flex flex-col">
            <p className="text-xs">
              Entrega via <span className="font-bold">FSPacket®</span>
            </p>
            <p className="text-xs text-[#8162ff]">
              Envio para <span className="font-bold">todo Brasil</span>
            </p>
          </div>
        </div>

        <p className="text-xs font-bold">Frete grátis</p>
      </div>
    </div>
  );
};

export default ProductInfo;
