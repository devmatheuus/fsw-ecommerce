import numberFormatter from "@/helpers/numberFormatter";
import { CartContext, CartProduct } from "@/providers/cart";
import Image from "next/image";
import React, { useContext } from "react";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";

const CartItem: React.FC<CartProduct> = (product) => {
  const { decreaseProductQuantity } = useContext(CartContext);

  const handleDecreaseProductQuantity = () => {
    decreaseProductQuantity(product.id);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            alt={product.name}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div className="flex flex-col">
          <p className="text-xs">{product.name}</p>

          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">
              {numberFormatter(product.totalPrice)}
            </p>

            {product.discountPercentage > 0 && (
              <p className="text-xs line-through opacity-75">
                {numberFormatter(+product.basePrice)}
              </p>
            )}
          </div>

          <div className="mt-4 flex items-center gap-1">
            <Button
              size="icon"
              className="h-8 w-8"
              variant="outline"
              onClick={handleDecreaseProductQuantity}
            >
              <ArrowLeftIcon size={16} />
            </Button>
            <span>{product.quantity}</span>
            <Button
              size="icon"
              className="h-8 w-8"
              variant="outline"
              //   onClick={handleIncreaseQuantity}
            >
              <ArrowRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>
      <Button size="icon" variant="outline">
        <TrashIcon size={16} />
      </Button>
    </div>
  );
};

export default CartItem;
