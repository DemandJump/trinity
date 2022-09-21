import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActionInfo = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 16 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M8.778 13.655a6.249 6.249 0 1 0-2.17-12.308 6.249 6.249 0 0 0 2.17 12.308Z"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="M7.693 7.5v3.75M7.693 4.375V3.75"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgActionInfo;
