import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconCollapseNavigation = ({
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
    <g
      clipPath="url(#IconCollapseNavigation_svg__a)"
      stroke="#373F50"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="m13 6-6 6m0 0 6 6m-6-6h15" strokeLinejoin="round" />
      <path d="M3 5v14" />
    </g>
    <defs>
      <clipPath id="IconCollapseNavigation_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgIconCollapseNavigation;
