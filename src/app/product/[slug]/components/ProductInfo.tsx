"use client";

import React, { useState } from "react";
import { ProductWithTotalPrice } from "@/helpers/product";
import numberFormatter from "@/helpers/numberFormatter";
import { Badge } from "@/components/ui/badge";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  TruckIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type ProductInfoProps = {
  product: Pick<
    ProductWithTotalPrice,
    "basePrice" | "description" | "discountPercentage" | "totalPrice" | "name"
  >;
};

const ProductInfo: React.FC<ProductInfoProps> = ({
  product: { basePrice, name, description, discountPercentage, totalPrice },
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity === 1 ? 1 : prevQuantity - 1));
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div className="flex flex-col px-5">
      <h2 className="text-lg">{name}</h2>

      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold">{numberFormatter(totalPrice)}</h1>

        {discountPercentage > 0 && (
          <Badge className="px-2 py-[2px]">
            <ArrowDownIcon size={14} /> <span>{discountPercentage}</span>
          </Badge>
        )}
      </div>
      {discountPercentage > 0 && (
        <p className="text-sm line-through opacity-75">
          {numberFormatter(+basePrice)}
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
        {description.split("\n").map((paragraph, index) => (
          <p key={index} className="text-justify text-sm opacity-60">
            {paragraph}
          </p>
        ))}
      </div>

      <Button className="mt-8 font-bold uppercase">
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
