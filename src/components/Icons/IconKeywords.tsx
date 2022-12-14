import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconKeywords = ({
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
      cx={11.47}
      cy={4.899}
      r={2.649}
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <path
      d="m12.715 14.087-.747.058-.113 1.495.748-.057.112-1.496Zm.386 1.457a.901.901 0 0 0 .804-.805.624.624 0 0 0-.691-.69l-.113 1.495Zm-.498.039.498-.039.113-1.495-.499.038-.112 1.496ZM12.757 11.73l-.748.058-.113 1.496.748-.058.113-1.495Zm.685 1.435a.901.901 0 0 0 .804-.805.624.624 0 0 0-.692-.69l-.112 1.495Zm-.798.062.798-.062.112-1.496-.797.062-.113 1.495Z"
      fill="currentColor"
    />
    <path
      d="m11.687 8.094.059 8"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.071 15.187c-1.793.264-3 .826-3 1.813 0 1.473 2.687 2 6 2 3.314 0 6-.527 6-2 0-.987-1.206-1.55-3-1.813v1.012c.357.057.68.126.964.209.477.139.767.293.92.422.118.1.117.148.116.167v.006c0 .02.002.067-.117.167-.152.129-.442.283-.92.422-.95.276-2.337.408-3.963.408-1.625 0-3.013-.132-3.963-.408-.478-.139-.767-.293-.92-.422-.119-.1-.117-.148-.117-.167v-.006c0-.02-.002-.067.117-.167.153-.13.442-.283.92-.422.284-.083.607-.152.963-.21v-1.011Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.071 12.677c-1.326.162-2.537.43-3.556.786-.867.304-1.676.7-2.298 1.214C2.605 15.183 2 15.96 2 17s.605 1.817 1.217 2.323c.622.515 1.43.91 2.298 1.214 1.749.612 4.067.963 6.556.963 2.49 0 4.808-.35 6.557-.963.867-.303 1.676-.7 2.298-1.214.611-.506 1.217-1.283 1.217-2.323s-.606-1.817-1.217-2.323c-.622-.514-1.43-.91-2.298-1.214-1.019-.357-2.23-.624-3.557-.786v1.512c3.255.425 5.572 1.524 5.572 2.811 0 1.657-3.838 3-8.572 3C7.338 20 3.5 18.657 3.5 17c0-1.287 2.317-2.386 5.571-2.811v-1.512Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgIconKeywords;
