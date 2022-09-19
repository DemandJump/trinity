import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconSupport = ({
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
      x={16}
      y={11}
      width={4}
      height={7}
      rx={2}
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <rect
      x={4}
      y={11}
      width={4}
      height={7}
      rx={2}
      stroke="currentColor"
      strokeWidth={2}
      strokeLinejoin="round"
    />
    <path
      d="M4 13v3M20 13v3"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 12c0-2.387-.843-4.676-2.343-6.364C16.157 3.948 14.122 3 12 3s-4.157.948-5.657 2.636C4.843 7.324 4 9.613 4 12"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 18h2v1a1 1 0 0 0 1 1h7a1 1 0 1 1 0 2H8a3 3 0 0 1-3-3v-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgIconSupport;
