import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconPrimaryDomain = ({
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
      cx={11.675}
      cy={11.467}
      r={8.616}
      transform="rotate(-90.392 11.675 11.467)"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="M9.318 3.388c-.737.83-1.336 1.93-1.755 3.224-.418 1.294-.647 2.751-.67 4.27-.023 1.52.16 3.064.537 4.527.377 1.462.94 2.807 1.646 3.942M14.059 3.466c.744.984 1.336 2.232 1.731 3.651.395 1.42.583 2.973.55 4.545a15.964 15.964 0 0 1-.74 4.53c-.455 1.409-1.099 2.643-1.884 3.61M3.059 11.526l17.232-.118M11.617 2.85l.117 17.233"
      stroke="currentColor"
      strokeWidth={1.436}
    />
    <path
      d="M18.066 16.553a1.492 1.492 0 0 0-2.095-.298 1.508 1.508 0 0 0-.3 2.104l2.395-1.806Zm-.17 4.785.898 1.202 2.395-1.806-.898-1.201-2.395 1.805ZM15.67 18.36l2.226 2.98 2.395-1.806-2.225-2.98-2.396 1.806Z"
      fill="currentColor"
    />
    <path
      d="m15.508 21.343-.401-6.006 5.58 2.254a.3.3 0 0 1 .064.521l-4.768 3.454a.3.3 0 0 1-.475-.223Z"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconPrimaryDomain;
