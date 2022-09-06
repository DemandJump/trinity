import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActionRedirectOut = ({
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
      d="M21.016 3V2h1v1h-1Zm-9.293 10.707a1 1 0 0 1-1.415-1.414l1.415 1.414ZM20.016 11V3h2v8h-2Zm1-7h-8V2h8v2Zm.707-.293-10 10-1.415-1.414 10-10 1.415 1.414Z"
      fill="#373F50"
    />
    <path
      d="M20.016 15v0c0 1.87 0 2.804-.402 3.5a3 3 0 0 1-1.098 1.098c-.696.402-1.631.402-3.5.402h-5c-2.829 0-4.243 0-5.122-.879-.878-.878-.878-2.293-.878-5.121V9c0-1.87 0-2.804.402-3.5a3 3 0 0 1 1.098-1.098C6.212 4 7.146 4 9.016 4v0"
      stroke="#373F50"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgActionRedirectOut;
