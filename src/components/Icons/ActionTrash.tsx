import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActionTrash = ({
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
    <path
      d="M10.024 15v-3M14.024 15v-3M3.024 7h18v0c-.931 0-1.397 0-1.765.152a2 2 0 0 0-1.082 1.083c-.153.367-.153.833-.153 1.765v6c0 1.886 0 2.828-.585 3.414-.586.586-1.529.586-3.415.586h-4c-1.885 0-2.828 0-3.414-.586-.586-.586-.586-1.528-.586-3.414v-6c0-.932 0-1.398-.152-1.765A2 2 0 0 0 4.79 7.152C4.422 7 3.956 7 3.024 7v0ZM10.093 3.37c.114-.106.365-.2.714-.267A6.68 6.68 0 0 1 12.024 3c.44 0 .869.036 1.218.103.35.067.6.161.714.268"
      stroke="#373F50"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgActionTrash;
