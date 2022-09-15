import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconManageContent = ({
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
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      d="M7.571 7h5.857M7.571 10h5.857M7.571 13h5.857M8 16h3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 2h7a4 4 0 0 1 4 4v3.475c0 .345-.126.678-.354.937-.573.65-1.646.246-1.646-.621V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-.373a1 1 0 0 1 .25-.66c.609-.692 1.75-.262 1.75.66V18a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm9 12.605a.14.14 0 0 1 .035-.093l1.718-1.95a.141.141 0 1 1 .212.186l-1.718 1.95a.141.141 0 0 1-.247-.093Z"
      fill="currentColor"
    />
    <path
      d="m18.914 11.155-5.274 5.99-.16.56.536-.23 5.273-5.99-.375-.33Z"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="M21.84 9.723a1 1 0 0 0-1.5-1.321l-1.05 1.192 1.5 1.322 1.05-1.193Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgIconManageContent;
