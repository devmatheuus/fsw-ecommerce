"use client";

import { bannerHome01 } from "@/constants";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-5">
      <Image
        src={bannerHome01}
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
        alt="Até 55% de desconto esse mês"
      />
    </div>
  );
}