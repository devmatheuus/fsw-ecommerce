import Image, { ImageProps } from "next/image";
import React from "react";

const PromoBanner: React.FC<ImageProps> = ({ alt, src, ...rest }) => {
  return (
    <Image
      height={0}
      width={0}
      className="h-auto w-full px-5"
      sizes="100vw"
      alt={alt}
      src={src}
      {...rest}
    />
  );
};

export default PromoBanner;
