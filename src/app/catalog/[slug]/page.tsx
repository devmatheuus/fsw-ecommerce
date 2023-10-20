import ProductItem from "@/components/ui/ProductItem";
import { Badge } from "@/components/ui/badge";
import categoryIcon from "@/constants/categoryItems";
import computedProductTotalPrice from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import React from "react";

type CategoryProductsProps = {
  params: {
    slug: string;
  };
};

const CategoryProducts: React.FC<CategoryProductsProps> = async ({
  params,
}) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      Product: true,
    },
  });

  if (!category) return null;

  return (
    <div className="flex flex-col gap-8 p-5">
      <Badge
        variant="outline"
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
      >
        {categoryIcon[params.slug]}
        <span>{params.slug}</span>
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {category.Product.map((product) => (
          <ProductItem
            key={product.id}
            product={computedProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
