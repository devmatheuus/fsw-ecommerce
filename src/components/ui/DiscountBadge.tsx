import { ArrowDownIcon } from "lucide-react";
import React from "react";
import { Badge, BadgeProps } from "./badge";
import { twMerge } from "tailwind-merge";

const DiscountBadge: React.FC<BadgeProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <Badge className={twMerge("px-2 py-[2px]", className)} {...rest}>
      <ArrowDownIcon size={14} /> {children}%
    </Badge>
  );
};

export default DiscountBadge;
