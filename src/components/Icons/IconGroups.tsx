import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconGroups = ({
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
      d="M20.65 21v-.933c0-.495-.211-.97-.586-1.32a2.075 2.075 0 0 0-1.415-.547h-4c-.53 0-1.039.197-1.414.547-.375.35-.586.825-.586 1.32V21M16.65 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM18 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM11 21v-.933c0-.495-.21-.97-.586-1.32A2.075 2.075 0 0 0 9 18.2H5c-.53 0-1.04.197-1.414.547-.375.35-.586.825-.586 1.32V21M7 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      stroke="currentColor"
      strokeWidth={1.143}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgIconGroups;
