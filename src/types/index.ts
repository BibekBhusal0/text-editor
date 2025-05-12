import { JSX, SVGProps } from "react";

export type IconDefinition = string | ((props: IconSvgProps) => JSX.Element) | JSX.Element
export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
  icon?: string
};
