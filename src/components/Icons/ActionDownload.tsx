import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActionDownload = ({
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
      d="m12 14-.707.707.707.707.707-.707L12 14Zm1-9a1 1 0 1 0-2 0h2ZM6.293 9.707l5 5 1.414-1.414-5-5-1.414 1.414Zm6.414 5 5-5-1.414-1.414-5 5 1.414 1.414ZM13 14V5h-2v9h2Z"
      fill="#373F50"
    />
    <path
      d="M5 16v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"
      stroke="#373F50"
      strokeWidth={2}
    />
  </svg>
);

export default SvgActionDownload;
