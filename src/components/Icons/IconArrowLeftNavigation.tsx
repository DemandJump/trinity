import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconArrowLeftNavigation = ({
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
      d="m13 15-3-3M13 9l-3 3"
      stroke="#373F50"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgIconArrowLeftNavigation;
