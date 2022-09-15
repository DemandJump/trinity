import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconCompetitorsSwords = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <rect
      width={0.93}
      height={7.083}
      rx={0.465}
      transform="matrix(.71592 -.69818 .69572 .71832 6.159 13.593)"
      fill="currentColor"
    />
    <rect
      width={0.93}
      height={7.083}
      rx={0.465}
      transform="matrix(.71592 -.69818 .69572 .71832 5.43 14.33)"
      fill="currentColor"
    />
    <mask id="IconCompetitorsSwords_svg__a" fill="#fff">
      <path d="m7.55 15.18 2.094 2.147-2.863 2.793a1 1 0 0 1-1.414-.018l-.699-.716a1 1 0 0 1 .018-1.414L7.55 15.18Z" />
    </mask>
    <path
      d="m7.55 15.18 2.094 2.147-2.863 2.793a1 1 0 0 1-1.414-.018l-.699-.716a1 1 0 0 1 .018-1.414L7.55 15.18Z"
      stroke="currentColor"
      strokeWidth={3}
      mask="url(#IconCompetitorsSwords_svg__a)"
    />
    <path
      d="m8.285 14.835 7.158-8.75 4.61-1.003-1.12 4.583-8.902 6.959"
      stroke="currentColor"
      strokeLinejoin="round"
    />
    <rect
      width={0.93}
      height={7.083}
      rx={0.465}
      transform="matrix(-.69844 -.71567 .71807 -.69597 13.097 19)"
      fill="currentColor"
    />
    <rect
      width={0.93}
      height={7.083}
      rx={0.465}
      transform="matrix(-.69844 -.71567 .71807 -.69597 13.834 19.729)"
      fill="currentColor"
    />
    <mask id="IconCompetitorsSwords_svg__b" fill="#fff">
      <path d="m14.683 17.608 2.147-2.095 2.616 2.68a1 1 0 0 1-.017 1.415l-.716.698a1 1 0 0 1-1.414-.017l-2.616-2.681Z" />
    </mask>
    <path
      d="m14.683 17.608 2.147-2.095 2.616 2.68a1 1 0 0 1-.017 1.415l-.716.698a1 1 0 0 1-1.414-.017l-2.616-2.681Z"
      stroke="currentColor"
      strokeWidth={3}
      mask="url(#IconCompetitorsSwords_svg__b)"
    />
    <path
      d="m8.815 12.403-3.23-2.685L4.582 5.11l4.583 1.116 2.651 2.677M14.459 17.044l-1.222-1.228M16.163 14.896l-1.005-.995"
      stroke="currentColor"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconCompetitorsSwords;
