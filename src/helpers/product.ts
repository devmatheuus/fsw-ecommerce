import { Product } from "@prisma/client";

export type ProductWithTotalPrice = Product & {
  totalPrice: number;
};
const computedProductTotalPrice = (product: Product): ProductWithTotalPrice => {
  let totalPrice: number;

  if (product.discountPercentage === 0) {
    totalPrice = Number(product.basePrice);
  } else {
    const totalDiscount =
      +product.basePrice * (product.discountPercentage / 100);

    totalPrice = +product.basePrice - totalDiscount;
  }

  return { ...product, totalPrice };
};

export default computedProductTotalPrice;
