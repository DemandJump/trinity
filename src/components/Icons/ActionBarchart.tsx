import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActionBarchart = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 5.667V4.333C21 4.15 20.888 4 20.75 4H5.25c-.138 0-.25.15-.25.333v1.334c0 .184.112.333.25.333h15.5c.138 0 .25-.15.25-.333Zm-3 2.666v1.334c0 .184-.112.333-.25.333H5.25C5.112 10 5 9.85 5 9.667V8.333C5 8.15 5.112 8 5.25 8h12.5c.138 0 .25.15.25.333Zm-3 5.334v-1.334c0-.184-.112-.333-.25-.333h-9.5c-.138 0-.25.15-.25.333v1.334c0 .184.112.333.25.333h9.5c.138 0 .25-.15.25-.333Zm-4 4v-1.334c0-.184-.096-.333-.214-.333H5.214c-.118 0-.214.15-.214.333v1.334c0 .184.096.333.214.333h5.572c.118 0 .214-.15.214-.333Z"
      fill="currentColor"
    />
    <path
      d="M3 3v17h18"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgActionBarchart;
