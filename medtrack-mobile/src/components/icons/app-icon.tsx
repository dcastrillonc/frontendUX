import { Image } from "react-native";
import { SvgUri } from "react-native-svg";

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

const iconSources = {
  alarm: {
    default: Image.resolveAssetSource(require("../../assets/alarm-black.svg")).uri,
    inverse: Image.resolveAssetSource(require("../../assets/alarm-white.svg")).uri,
  },
  bell: {
    default: Image.resolveAssetSource(require("../../assets/bell.svg")).uri,
    inverse: Image.resolveAssetSource(require("../../assets/bell.svg")).uri,
  },
  camera: {
    default: Image.resolveAssetSource(require("../../assets/camera.svg")).uri,
    inverse: Image.resolveAssetSource(require("../../assets/camera.svg")).uri,
  },
  check: {
    default: Image.resolveAssetSource(require("../../assets/check.svg")).uri,
    inverse: Image.resolveAssetSource(require("../../assets/check.svg")).uri,
  },
  "chev-circle-left": {
    default: Image.resolveAssetSource(require("../../assets/chev-circle-left.svg")).uri,
    inverse: Image.resolveAssetSource(require("../../assets/chev-circle-left.svg")).uri,
  },
  home: {
    default: Image.resolveAssetSource(require("../../assets/home-black.svg")).uri,
    inverse: Image.resolveAssetSource(require("../../assets/home-white.svg")).uri,
  },
  plus: {
    default: Image.resolveAssetSource(require("../../assets/add.svg")).uri,
    inverse: Image.resolveAssetSource(require("../../assets/add.svg")).uri,
  },
  timer: {
    default: Image.resolveAssetSource(require("../../assets/timer.svg")).uri,
    inverse: Image.resolveAssetSource(require("../../assets/timer.svg")).uri,
  },
  trophy: {
    default: Image.resolveAssetSource(require("../../assets/trophy.svg")).uri,
    inverse: Image.resolveAssetSource(require("../../assets/trophy.svg")).uri,
  },
} satisfies Record<IconName, Record<IconVariant, string>>;

export function AppIcon({ name, size = 20, variant = "default" }: AppIconProps) {
  return <SvgUri uri={iconSources[name][variant]} width={size} height={size} />;
}
