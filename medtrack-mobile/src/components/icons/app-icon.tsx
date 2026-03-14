import type React from "react";
import type { SvgProps } from "react-native-svg";

import AlarmBlack from "../../assets/alarm-black.svg";
import AlarmWhite from "../../assets/alarm-white.svg";
import Bell from "../../assets/bell.svg";
import Camera from "../../assets/camera.svg";
import Check from "../../assets/check.svg";
import ChevCircleLeft from "../../assets/chev-circle-left.svg";
import HomeBlack from "../../assets/home-black.svg";
import HomeWhite from "../../assets/home-white.svg";
import Add from "../../assets/add.svg";
import Timer from "../../assets/timer.svg";
import Trophy from "../../assets/trophy.svg";

type IconName =
  | "alarm"
  | "bell"
  | "camera"
  | "check"
  | "chev-circle-left"
  | "home"
  | "plus"
  | "timer"
  | "trophy";
type IconVariant = "default" | "inverse";

type AppIconProps = {
  name: IconName;
  size?: number;
  variant?: IconVariant;
};

const iconComponents: Record<IconName, Record<IconVariant, React.ComponentType<SvgProps>>> = {
  alarm: { default: AlarmBlack, inverse: AlarmWhite },
  bell: { default: Bell, inverse: Bell },
  camera: { default: Camera, inverse: Camera },
  check: { default: Check, inverse: Check },
  "chev-circle-left": { default: ChevCircleLeft, inverse: ChevCircleLeft },
  home: { default: HomeBlack, inverse: HomeWhite },
  plus: { default: Add, inverse: Add },
  timer: { default: Timer, inverse: Timer },
  trophy: { default: Trophy, inverse: Trophy },
};

export function AppIcon({ name, size = 20, variant = "default" }: AppIconProps) {
  const Icon = iconComponents[name][variant];
  return <Icon width={size} height={size} />;
}
