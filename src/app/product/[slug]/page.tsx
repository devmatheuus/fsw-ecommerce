import { prismaClient } from "@/lib/prisma";
import React from "react";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import computedProductTotalPrice from "@/helpers/product";

type ProductDetailsPageProps = {
  params: {
    slug: string;
  };
};

const ProductDetailsPage: React.FC<ProductDetailsPageProps> = async ({
  params: { slug },
}) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug,
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8">
      <ProductImages alt={product.name} imageUrls={product.imageUrls} />
      <ProductInfo product={computedProductTotalPrice(product)} />
    </div>
  );
};

export default ProductDetailsPage;
