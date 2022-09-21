import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconUsers = ({
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
      d="M21.782 14.12v-1.064a2.02 2.02 0 0 0-.697-1.505 2.529 2.529 0 0 0-1.682-.623h-4.758c-.631 0-1.236.224-1.682.623a2.02 2.02 0 0 0-.697 1.505v1.064M17.024 9.56c1.314 0 2.379-1.02 2.379-2.28 0-1.26-1.065-2.28-2.38-2.28-1.313 0-2.378 1.02-2.378 2.28 0 1.26 1.065 2.28 2.379 2.28ZM12.517 19.44v-1.064c0-.565-.251-1.106-.697-1.505a2.529 2.529 0 0 0-1.683-.623H5.38c-.63 0-1.236.224-1.682.623-.446.4-.697.94-.697 1.505v1.064M7.758 14.88c1.314 0 2.38-1.02 2.38-2.28 0-1.26-1.066-2.28-2.38-2.28-1.314 0-2.38 1.02-2.38 2.28 0 1.26 1.066 2.28 2.38 2.28Z"
      stroke="currentColor"
      strokeWidth={1.303}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconUsers;
