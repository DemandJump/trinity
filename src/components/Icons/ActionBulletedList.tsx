import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActionBulletedList = ({
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
      d="M11 8h6M11 12h6M11 16h6"
      stroke="#373F50"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <circle cx={7.5} cy={7.5} r={1.5} fill="#373F50" />
    <circle cx={7.5} cy={11.5} r={1.5} fill="#373F50" />
    <circle cx={7.5} cy={15.5} r={1.5} fill="#373F50" />
  </svg>
);

export default SvgActionBulletedList;
