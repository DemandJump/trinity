import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActionArchive1 = ({
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
      d="M4.516 7.5v8c0 1.886 0 2.828.585 3.414.586.586 1.529.586 3.415.586h7c1.885 0 2.828 0 3.414-.586.586-.586.586-1.528.586-3.414v-8m-15 0h15m-15 0H2.944c-.167 0-.25 0-.311-.038a.25.25 0 0 1-.08-.079c-.037-.061-.037-.145-.037-.312 0-1.002 0-1.503.23-1.869a1.5 1.5 0 0 1 .472-.472c.365-.23.867-.23 1.869-.23h13.857c1.003 0 1.504 0 1.87.23.19.12.352.281.472.472.23.366.23.867.23 1.87 0 .166 0 .25-.039.311a.25.25 0 0 1-.078.079c-.061.038-.145.038-.312.038h-1.571"
      stroke="#373F50"
      strokeWidth={2}
    />
    <path
      d="M9.516 14.5h5"
      stroke="#373F50"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgActionArchive1;
