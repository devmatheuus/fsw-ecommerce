import { Product } from "@prisma/client";

type ProductWithTotalPrice = Product & {
  totalPrice: number;
};
const computedProductTotalPrice = (product: Product): ProductWithTotalPrice => {
  let totalPrice: number;

  if (product.discountPercentage === 0) {
    totalPrice = Number(product.basePrice);
  } else {
    totalPrice = +product.basePrice * (product.discountPercentage / 100);
  }

  return { ...product, totalPrice };
};

export default computedProductTotalPrice;
