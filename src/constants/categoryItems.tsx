import {
  HeadphonesIcon,
  KeyboardIcon,
  MonitorIcon,
  MouseIcon,
  SpeakerIcon,
  SquareIcon,
} from "lucide-react";

type CategoryIconProps = {
  [key: string]: React.ReactNode;
};

const ICON_SIZE = 16;

const categoryIcon: CategoryIconProps = {
  keyboards: <KeyboardIcon size={ICON_SIZE} />,
  monitors: <MonitorIcon size={ICON_SIZE} />,
  headphones: <HeadphonesIcon size={ICON_SIZE} />,
  mousepads: <SquareIcon size={ICON_SIZE} />,
  speakers: <SpeakerIcon size={ICON_SIZE} />,
  mouses: <MouseIcon size={ICON_SIZE} />,
} as const;

export default categoryIcon;
