import { prismaClient } from "@/lib/prisma";
import React from "react";
import ProductImages from "./components/ProductImages";

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
    <div>
      <ProductImages alt={product.name} imageUrls={product.imageUrls} />
    </div>
  );
};

export default ProductDetailsPage;
