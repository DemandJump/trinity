import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconAttribution = ({
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
    <mask id="IconAttribution_svg__a" fill="#fff">
      <rect x={2} y={3} width={7} height={8} rx={1} />
    </mask>
    <rect
      x={2}
      y={3}
      width={7}
      height={8}
      rx={1}
      stroke="currentColor"
      strokeWidth={4}
      strokeLinejoin="round"
      mask="url(#IconAttribution_svg__a)"
    />
    <mask id="IconAttribution_svg__b" fill="#fff">
      <rect x={15} y={3} width={7} height={8} rx={1} />
    </mask>
    <rect
      x={15}
      y={3}
      width={7}
      height={8}
      rx={1}
      stroke="currentColor"
      strokeWidth={4}
      strokeLinejoin="round"
      mask="url(#IconAttribution_svg__b)"
    />
    <mask id="IconAttribution_svg__c" fill="#fff">
      <rect x={15} y={14} width={7} height={8} rx={1} />
    </mask>
    <rect
      x={15}
      y={14}
      width={7}
      height={8}
      rx={1}
      stroke="currentColor"
      strokeWidth={4}
      strokeLinejoin="round"
      mask="url(#IconAttribution_svg__c)"
    />
    <path stroke="currentColor" strokeWidth={2} d="M9 7h6" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 8v10h4v-2h-2V8h-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgIconAttribution;
