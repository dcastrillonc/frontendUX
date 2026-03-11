import { Image } from "react-native";
import { SvgUri } from "react-native-svg";

type MedtrackLogoProps = {
  size?: number;
};

const logoUri = Image.resolveAssetSource(require("../../assets/logo.svg")).uri;

export function MedtrackLogo({ size = 88 }: MedtrackLogoProps) {
  return <SvgUri uri={logoUri} width={size} height={size} />;
}
