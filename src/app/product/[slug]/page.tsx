import { prismaClient } from "@/lib/prisma";
import React from "react";

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

  return <div>{product.name}</div>;
};

export default ProductDetailsPage;
