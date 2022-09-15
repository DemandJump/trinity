import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActionMove = ({
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
      d="m12.016 3 .73-.684-.73-.778-.73.778.73.684Zm-1 6a1 1 0 1 0 2 0h-2Zm4.73-3.484-3-3.2-1.46 1.368 3 3.2 1.46-1.368Zm-4.46-3.2-3 3.2 1.46 1.368 3-3.2-1.46-1.368Zm-.27.684v6h2V3h-2ZM21.016 12l.684.73.778-.73-.778-.73-.684.73Zm-6-1a1 1 0 1 0 0 2v-2Zm3.484 4.73 3.2-3-1.368-1.46-3.2 3 1.368 1.46Zm3.2-4.46-3.2-3-1.368 1.46 3.2 3 1.368-1.46Zm-.684-.27h-6v2h6v-2ZM12.016 21l.73.684-.73.778-.73-.778.73-.684Zm-1-6a1 1 0 1 1 2 0h-2Zm4.73 3.484-3 3.2-1.46-1.368 3-3.2 1.46 1.368Zm-4.46 3.2-3-3.2 1.46-1.368 3 3.2-1.46 1.368Zm-.27-.684v-6h2v6h-2ZM3.016 12l-.684.73-.778-.73.778-.73.684.73Zm6-1a1 1 0 1 1 0 2v-2Zm-3.484 4.73-3.2-3L3.7 11.27l3.2 3-1.368 1.46Zm-3.2-4.46 3.2-3L6.9 9.73l-3.2 3-1.368-1.46Zm.684-.27h6v2h-6v-2Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgActionMove;
