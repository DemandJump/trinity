import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActionArchive2 = ({
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
      d="M20.515 12.5h-2.559c-.696 0-1.043 0-1.305.189-.262.188-.372.518-.592 1.178l-.089.265c-.22.66-.33.99-.591 1.18-.262.188-.61.188-1.306.188H9.956c-.696 0-1.043 0-1.305-.189-.262-.188-.372-.518-.592-1.178l-.088-.265c-.22-.66-.33-.99-.592-1.18-.262-.188-.61-.188-1.306-.188H3.515M9.515 9.5l2.5 2.5m0 0 2.5-2.5m-2.5 2.5V5"
      stroke="#373F50"
      strokeWidth={2}
    />
    <path
      d="M6.515 8.5 4.797 9.645c-.469.313-.703.469-.873.675a1.8 1.8 0 0 0-.332.62c-.077.256-.077.538-.077 1.101v3.579c0 1.008 0 1.512.196 1.897a1.8 1.8 0 0 0 .786.787c.386.196.89.196 1.898.196h11.24c1.008 0 1.512 0 1.897-.196a1.8 1.8 0 0 0 .787-.787c.196-.385.196-.889.196-1.897v-3.579c0-.563 0-.845-.078-1.1a1.8 1.8 0 0 0-.332-.62c-.17-.207-.404-.363-.873-.676L17.515 8.5"
      stroke="#373F50"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgActionArchive2;
