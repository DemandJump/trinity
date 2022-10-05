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
      d="M31 17.5C31 25.54 24.701 32 17 32S3 25.54 3 17.5 9.299 3 17 3s14 6.46 14 14.5Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M27 27v-2.333c0-1.238-.527-2.425-1.465-3.3C24.598 20.492 23.326 20 22 20H12c-1.326 0-2.598.492-3.536 1.367-.937.875-1.464 2.062-1.464 3.3V27M17 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconUserProfile;
