import React, { ComponentProps } from "react";

const SectionTitle: React.FC<ComponentProps<"p">> = ({ children, ...rest }) => {
  return (
    <p className="mb-3 pl-5 font-bold uppercase" {...rest}>
      {children}
    </p>
  );
};

export default SectionTitle;
