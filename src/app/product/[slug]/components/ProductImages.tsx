"use client";

import Image from "next/image";
import React, { useState } from "react";

type ProductImagesProps = {
  imageUrls: string[];
  alt: string;
};

const ProductImages: React.FC<ProductImagesProps> = ({ imageUrls, alt }) => {
  const [currentImageUrl, setCurrentImageUrl] = useState<string>(imageUrls[0]);

  const handleCurrentImageUrlChange = (imageUrl: string) => {
    setCurrentImageUrl(imageUrl);
  };

  return (
    <div className="flex flex-col">
      <div className="flex h-[380px] w-full items-center justify-center bg-accent">
        <Image
          src={currentImageUrl}
          alt={alt}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4 px-5">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            onClick={() => handleCurrentImageUrlChange(imageUrl)}
            className={`flex h-[100px] items-center justify-center rounded-lg bg-accent 
              ${
                imageUrl === currentImageUrl &&
                " border-2 border-solid border-primary"
              }`}
          >
            <Image
              src={imageUrl}
              alt={alt}
              height={0}
              width={0}
              sizes="100vw"
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
              style={{ objectFit: "contain" }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
