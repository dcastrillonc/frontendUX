import LogoIcon from "../../assets/logo.svg";

type MedtrackLogoProps = {
  size?: number;
};

export function MedtrackLogo({ size = 88 }: MedtrackLogoProps) {
  return <LogoIcon width={size} height={size} />;
}
