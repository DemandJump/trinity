import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconConnectors = ({
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
    <circle
      cx={16.121}
      cy={3.121}
      r={1.5}
      transform="rotate(-45 16.121 3.121)"
      fill="currentColor"
    />
    <circle
      cx={8.121}
      cy={3.121}
      r={1.5}
      transform="rotate(-45 8.121 3.121)"
      fill="currentColor"
    />
    <circle
      r={1.457}
      transform="matrix(.6855 -.72808 .6855 .72808 3.997 8.121)"
      fill="currentColor"
    />
    <circle
      r={1.457}
      transform="matrix(.6855 -.72808 .6855 .72808 20.003 8.121)"
      fill="currentColor"
    />
    <circle
      r={1.5}
      transform="scale(1 -1) rotate(45 32.35 9.4)"
      fill="currentColor"
    />
    <circle
      r={1.5}
      transform="scale(1 -1) rotate(45 28.35 -.258)"
      fill="currentColor"
    />
    <circle
      r={1.491}
      transform="scale(.99395 -1.00601) rotate(45 20.204 -2.541)"
      fill="currentColor"
    />
    <circle
      r={1.491}
      transform="scale(.99395 -1.00601) rotate(45 28.253 16.89)"
      fill="currentColor"
    />
    <path
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      stroke="currentColor"
      strokeWidth={1.458}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 8.5 8.5 4M13 9l3-5.5M9 10 4.5 8.5M14.5 10.5l5-2M10.5 14.5l-2 5M4 15l5-2M13.5 14.5 16 20M15 13l5 2"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

export default SvgIconConnectors;
