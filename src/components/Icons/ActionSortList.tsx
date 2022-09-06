import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActionSortList = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M5.015 7h7M5.015 12h7M5.015 17h7"
      stroke="#373F50"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      d="m19.015 20 3-3m-3 3-3-3m3 3V4m0 0-3 3m3-3 3 3"
      stroke="#373F50"
      strokeWidth={2}
    />
  </svg>
);

export default SvgActionSortList;
