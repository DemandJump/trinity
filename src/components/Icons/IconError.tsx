import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconError = ({
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10ZM10.897 8.408l.336 4.896h1.536l.336-4.896.08-2.128h-2.368l.08 2.128Zm.08 8.368c.278.277.619.416 1.024.416a1.34 1.34 0 0 0 1.008-.416c.278-.288.416-.64.416-1.056 0-.427-.138-.779-.416-1.056a1.315 1.315 0 0 0-1.008-.432c-.405 0-.746.144-1.024.432-.266.277-.4.63-.4 1.056 0 .416.134.768.4 1.056Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgIconError;
