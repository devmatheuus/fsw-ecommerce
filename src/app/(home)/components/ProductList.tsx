import React from "react";
import { Product } from "@prisma/client";
import ProductItem from "@/components/ui/ProductItem";
import computedProductTotalPrice from "@/helpers/product";

type ProductListProps = {
  products: Product[];
};
const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={computedProductTotalPrice(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
