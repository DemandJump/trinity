import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActionShow = ({
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
    <circle cx={12.015} cy={12} r={3} stroke="currentColor" strokeWidth={2} />
    <path
      d="M20.203 10.934c.388.472.582.707.582 1.066 0 .359-.194.594-.582 1.066C18.783 14.79 15.65 18 12.015 18c-3.636 0-6.768-3.21-8.188-4.934-.389-.472-.583-.707-.583-1.066 0-.359.194-.594.583-1.066C5.247 9.21 8.379 6 12.015 6c3.635 0 6.768 3.21 8.188 4.934Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgActionShow;
