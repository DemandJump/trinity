import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconAnalytics = ({
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
      d="M20.159 3h1.117c.155 0 .28.123.28.275v17.05a.277.277 0 0 1-.28.275H20.16a.277.277 0 0 1-.28-.275V3.275c0-.152.125-.275.28-.275Zm-3.353 3.3H15.69a.277.277 0 0 0-.28.275v13.75c0 .152.125.275.28.275h1.117c.155 0 .28-.123.28-.275V6.575a.277.277 0 0 0-.28-.275ZM11.22 9.6h1.117c.155 0 .28.123.28.275v10.45a.277.277 0 0 1-.28.275H11.22a.277.277 0 0 1-.28-.275V9.875c0-.152.126-.275.28-.275Zm-3.352 3.3H6.749a.277.277 0 0 0-.28.275v7.15c0 .152.126.275.28.275h1.118c.154 0 .279-.123.279-.275v-7.15a.277.277 0 0 0-.28-.275Zm-4.47 3.3H2.279a.277.277 0 0 0-.279.275v3.85c0 .152.125.275.28.275h1.117c.154 0 .28-.123.28-.275v-3.85a.277.277 0 0 0-.28-.275Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgIconAnalytics;
