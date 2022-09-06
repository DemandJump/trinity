import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActionRefresh1 = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 22 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="m17.025 11.933-.348.358.354.346.35-.352-.356-.352Zm-3.674-2.878 3.326 3.236.697-.716-3.326-3.236-.697.716Zm4.03 3.23 3.269-3.293-.71-.704-3.27 3.293.71.704Z"
      fill="#373F50"
    />
    <path
      d="M13.752 15.043a5.821 5.821 0 0 1-3.74.734 5.79 5.79 0 0 1-3.386-1.735 5.67 5.67 0 0 1-.596-7.1 5.767 5.767 0 0 1 3.049-2.267 5.826 5.826 0 0 1 3.811.11 5.755 5.755 0 0 1 2.91 2.44 5.665 5.665 0 0 1 .736 3.704"
      stroke="#373F50"
      strokeLinecap="round"
    />
    <path d="m16.926 12.726-4.325-4.46 8.686.034-4.36 4.426Z" fill="#373F50" />
  </svg>
);

export default SvgActionRefresh1;
