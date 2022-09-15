import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconTrackTicket = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 21 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M0 3.945c3.114 0 3.114 7.989 0 7.989"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path d="M4.99 3.94v8" stroke="currentColor" strokeLinecap="round" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm4.364-6a4.364 4.364 0 1 1-8.727 0 4.364 4.364 0 0 1 8.727 0Zm-3.546-2.182a.818.818 0 1 0-1.636 0V11c0 .352.225.665.56.776l1.636.546a.818.818 0 0 0 .517-1.553l-1.077-.359V8.818Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.019.75A.75.75 0 0 1 .769 0h18.443a.75.75 0 0 1 .75.75v10.16a4.492 4.492 0 0 0-1.5-2.798V1.5H1.519v3.922C1.17 4.997.732 4.744.256 4.744c-.08 0-.16.007-.237.021V.75ZM12.04 14.379H1.52v-3.922c-.348.424-.787.678-1.263.678-.08 0-.16-.008-.237-.022v4.016c0 .414.335.75.75.75h13.689a4.5 4.5 0 0 1-2.417-1.5Zm4.501 1.5h2.67a.75.75 0 0 0 .75-.75V12.09a4.504 4.504 0 0 1-3.42 3.788Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgIconTrackTicket;
