import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActionFilter1 = ({
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
    <mask
      id="ActionFilter1_svg__a"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={3}
      y={6}
      width={19}
      height={12}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.016 6v2h18V6h-18Zm7 12h4v-2h-4v2Zm8-5h-12v-2h12v2Z"
        fill="#fff"
      />
    </mask>
    <g mask="url(#ActionFilter1_svg__a)">
      <path fill="currentColor" d="M.016 0h24v24h-24z" />
    </g>
  </svg>
);

export default SvgActionFilter1;
