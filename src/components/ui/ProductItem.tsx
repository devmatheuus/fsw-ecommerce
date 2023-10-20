import React from "react";
import Image from "next/image";
import { ProductWithTotalPrice } from "@/helpers/product";
import numberFormatter from "@/helpers/numberFormatter";
import Link from "next/link";
import DiscountBadge from "./DiscountBadge";

type ProductItemProps = {
  product: ProductWithTotalPrice;
};
const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="flex flex-col gap-4">
        <div className="w-min-[170px] relative flex h-[170px] w-full items-center justify-center rounded-lg bg-accent">
          {product.discountPercentage > 0 && (
            <DiscountBadge className="absolute left-3 top-3">
              {product.discountPercentage}
            </DiscountBadge>
          )}

          <Image
            src={product.imageUrls[0]}
            height={0}
            width={0}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
            sizes="100vw"
            alt={product.name}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </p>

          <div className="flex items-center gap-2">
            {product.discountPercentage > 0 && (
              <>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
                  {numberFormatter(product.totalPrice)}
                </p>

                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs line-through opacity-75">
                  {numberFormatter(+product.basePrice)}
                </p>
              </>
            )}

            {product.discountPercentage === 0 && (
              <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-semibold">
                {numberFormatter(+product.basePrice)}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
