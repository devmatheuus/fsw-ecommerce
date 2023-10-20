import { bannerHome01, bannerHome02 } from "@/constants";
import Image from "next/image";
import Categories from "./components/Categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "@/app/(home)/components/ProductList";
import SectionTitle from "./components/SectionTitle";
import PromoBanner from "./components/PromoBanner";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  return (
    <div>
      <PromoBanner alt="Até 55% de desconto esse mês" src={bannerHome01} />

      <div className="mt-8 px-5">
        <Categories />
      </div>

      <div className="my-8">
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner alt="Até 55% de desconto em mouses" src={bannerHome02} />

      <div className="mt-8">
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>
    </div>
  );
}
