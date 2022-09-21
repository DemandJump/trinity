import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconAttribution = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="m8 16-4-4M8 8l-4 4M16 8l4 4M16 16l4-4"
      stroke="currentColor"
      strokeWidth={2.667}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgIconAttribution;
