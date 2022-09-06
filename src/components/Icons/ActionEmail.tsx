import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActionEmail = ({
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
    <rect
      x={4}
      y={6}
      width={16}
      height={12}
      rx={2}
      stroke="#373F50"
      strokeWidth={2}
    />
    <path
      d="m4 9 7.106 3.553a2 2 0 0 0 1.788 0L20 9"
      stroke="#373F50"
      strokeWidth={2}
    />
  </svg>
);

export default SvgActionEmail;
