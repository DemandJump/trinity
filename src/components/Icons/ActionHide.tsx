import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgActionHide = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.935 12.799a4 4 0 0 0-4.72-4.719l4.72 4.719ZM8.68 9.788a4 4 0 0 0 5.545 5.545l-1.473-1.474a2 2 0 0 1-2.598-2.598L8.681 9.789Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m16.534 17.64-1.47-1.469c-.972.51-2.002.829-3.05.829-1.525 0-3.013-.678-4.34-1.632-1.32-.95-2.396-2.112-3.076-2.938-.1-.121-.174-.212-.236-.291a2.048 2.048 0 0 1-.1-.139c.02-.031.051-.075.1-.139.062-.08.136-.17.236-.291.666-.808 1.71-1.938 2.99-2.875l-1.429-1.43C4.811 8.297 3.737 9.47 3.055 10.3l-.074.088c-.313.375-.737.883-.737 1.613s.424 1.238.737 1.613l.074.088c.74.899 1.94 2.203 3.45 3.29C8.01 18.073 9.906 19 12.016 19c1.67 0 3.205-.581 4.519-1.36ZM8.82 5.686C9.805 5.269 10.88 5 12.014 5c2.11 0 4.006.927 5.51 2.009 1.51 1.087 2.71 2.391 3.45 3.29l.074.088c.313.375.737.883.737 1.613s-.424 1.238-.737 1.613l-.074.088a20.491 20.491 0 0 1-2.015 2.123l-1.416-1.416a18.45 18.45 0 0 0 2.124-2.27 2.07 2.07 0 0 0 .1-.138 2.07 2.07 0 0 0-.1-.139 13.85 13.85 0 0 0-.236-.291c-.68-.826-1.757-1.989-3.076-2.938C15.028 7.678 13.54 7 12.015 7c-.552 0-1.098.088-1.633.246l-1.56-1.56Z"
      fill="currentColor"
    />
    <path d="m5.015 2 16 16" stroke="currentColor" strokeWidth={2} />
  </svg>
);

export default SvgActionHide;
