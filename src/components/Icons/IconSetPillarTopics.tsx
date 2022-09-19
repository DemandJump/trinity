import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconSetPillarTopics = ({
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
      d="M5 3h14M5 21h14"
      stroke="#373F50"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path d="M6 5.118h12M6 18.882h12" stroke="#373F50" strokeLinecap="round" />
    <path
      d="M9 7.235v9.53M15 7.235v9.53M12 7.235v9.53"
      stroke="#373F50"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgIconSetPillarTopics;
