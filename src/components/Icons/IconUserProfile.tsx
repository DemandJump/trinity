import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconUserProfile = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 34 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M30.571 17.5c0 7.816-6.12 14.071-13.571 14.071S3.429 25.316 3.429 17.5 9.549 3.429 17 3.429s13.571 6.255 13.571 14.07Z"
      stroke="#373F50"
      strokeWidth={2.858}
    />
    <path
      d="M27 27v-2.334c0-1.237-.527-2.424-1.465-3.3C24.598 20.492 23.326 20 22 20H12c-1.326 0-2.598.491-3.536 1.367-.937.875-1.464 2.062-1.464 3.3V27M17 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      stroke="#373F50"
      strokeWidth={2.858}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconUserProfile;
