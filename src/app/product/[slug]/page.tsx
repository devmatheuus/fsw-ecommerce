import { prismaClient } from "@/lib/prisma";
import React from "react";
import ProductImages from "./components/ProductImages";
import ProductInfo from "./components/ProductInfo";
import computedProductTotalPrice from "@/helpers/product";
import ProductList from "@/components/ui/ProductList";
import SectionTitle from "@/components/ui/SectionTitle";

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
    include: {
      category: {
        include: {
          Product: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className="flex flex-col gap-8 pb-8">
      <ProductImages alt={product.name} imageUrls={product.imageUrls} />
      <ProductInfo product={computedProductTotalPrice(product)} />

      <div>
        <SectionTitle>Produtos Recomendados</SectionTitle>
        <ProductList products={product.category.Product} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
