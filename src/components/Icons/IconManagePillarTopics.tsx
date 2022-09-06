import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconManagePillarTopics = ({
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
    <g clipPath="url(#IconManagePillarTopics_svg__a)">
      <path
        d="M4 21h16"
        stroke="#373F50"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <path d="M4 9h16" stroke="#373F50" strokeLinecap="round" />
      <path
        d="M10 17v-6M6 17v-6M18 17v-6M14 17v-6"
        stroke="#373F50"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <path
        d="M11.603 2.172a1 1 0 0 1 .794 0l7.299 3.16c.996.432.688 1.918-.398 1.918H4.702c-1.086 0-1.394-1.486-.398-1.918l7.299-3.16Z"
        stroke="#373F50"
        strokeWidth={1.5}
      />
      <circle cx={12} cy={5} r={1} fill="#373F50" />
      <path d="M4 19h16" stroke="#373F50" strokeLinecap="round" />
    </g>
    <defs>
      <clipPath id="IconManagePillarTopics_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgIconManagePillarTopics;
