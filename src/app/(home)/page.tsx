import { bannerHome01, bannerHome02, bannerHome03 } from "@/constants";
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

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8">
      <PromoBanner alt="Até 55% de desconto esse mês" src={bannerHome01} />

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={deals} />
      </div>

      <PromoBanner alt="Até 55% de desconto em mouses" src={bannerHome02} />

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards} />
      </div>

      <PromoBanner alt="Até 20% de desconto em fones" src={bannerHome03} />

      <div>
        <SectionTitle>Mouses</SectionTitle>
        <ProductList products={mouses} />
      </div>
    </div>
  );
}
