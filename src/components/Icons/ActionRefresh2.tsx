import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActionRefresh2 = ({
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
      d="m10.016 19-.707-.707L8.6 19l.708.707.707-.707Zm3.293-4.707-4 4 1.414 1.414 4-4-1.415-1.414Zm-4 5.414 4 4 1.414-1.414-4-4-1.414 1.414Z"
      fill="currentColor"
    />
    <path
      d="M5.953 15.5a7 7 0 1 1 6.063 3.5"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgActionRefresh2;
