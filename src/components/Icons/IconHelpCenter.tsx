import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconHelpCenter = ({
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
      d="M20.5 12c0 2.077-.745 3.98-1.983 5.457l-2.49-2.492c.611-.83.973-1.855.973-2.965 0-1.11-.362-2.136-.974-2.965l2.491-2.492A8.466 8.466 0 0 1 20.5 12ZM12 20.5c2.077 0 3.98-.745 5.457-1.983l-2.492-2.49A4.978 4.978 0 0 1 12 17a4.978 4.978 0 0 1-2.965-.974l-2.492 2.491A8.466 8.466 0 0 0 12 20.5Zm-6.517-3.043A8.466 8.466 0 0 1 3.5 12c0-2.077.745-3.98 1.983-5.457l2.49 2.492A4.978 4.978 0 0 0 7 12c0 1.11.362 2.136.974 2.965l-2.491 2.492Zm9.482-9.483 2.492-2.491A8.466 8.466 0 0 0 12 3.5c-2.077 0-3.98.745-5.457 1.983l2.492 2.49A4.978 4.978 0 0 1 12 7c1.11 0 2.136.362 2.965.974ZM22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-6.5 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgIconHelpCenter;
