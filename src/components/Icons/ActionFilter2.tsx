import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActionFilter2 = ({
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
      d="M12.015 7h8M4.015 7h4M17.015 17h3M4.015 17h8"
      stroke="#373F50"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <circle
      cx={10.015}
      cy={7}
      r={2}
      transform="rotate(90 10.015 7)"
      stroke="#373F50"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <circle
      cx={15.015}
      cy={17}
      r={2}
      transform="rotate(90 15.015 17)"
      stroke="#373F50"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgActionFilter2;
