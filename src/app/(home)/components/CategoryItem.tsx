import { Badge } from "@/components/ui/badge";
import categoryIcon from "@/constants/categoryItems";
import { Category } from "@prisma/client";
import React from "react";

type CategoryItemsProps = {
  category: Category;
};

const CategoryItem: React.FC<CategoryItemsProps> = ({ category }) => {
  return (
    <Badge
      variant="outline"
      className="flex items-center justify-center gap-2 rounded-lg py-3"
    >
      {categoryIcon[category.slug]}
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  );
};

export default CategoryItem;
