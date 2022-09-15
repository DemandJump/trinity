import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActionMore = ({
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
    <circle cx={12} cy={6} r={2} fill="currentColor" />
    <circle cx={12} cy={12} r={2} fill="currentColor" />
    <circle cx={12} cy={18} r={2} fill="currentColor" />
    <rect
      x={3}
      y={1}
      width={18}
      height={22}
      rx={3}
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgActionMore;
