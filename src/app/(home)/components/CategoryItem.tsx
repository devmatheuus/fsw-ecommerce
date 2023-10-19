import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";
import React from "react";

type CategoryItemsProps = {
  category: Category;
};

type CategoryIconProps = {
  [key: string]: React.ReactNode;
};

const CategoryItem: React.FC<CategoryItemsProps> = ({ category }) => {
  const ICON_SIZE = 16;

  const categoryIcon: CategoryIconProps = {
    keyboards: <KeyboardIcon size={ICON_SIZE} />,
    monitors: <MonitorIcon size={ICON_SIZE} />,
    headphones: <HeadphonesIcon size={ICON_SIZE} />,
    mousepads: <SquareIcon size={ICON_SIZE} />,
    speakers: <SpeakerIcon size={ICON_SIZE} />,
    mouses: <MouseIcon size={ICON_SIZE} />,
  } as const;

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
