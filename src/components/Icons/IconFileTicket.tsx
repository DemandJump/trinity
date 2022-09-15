import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconFileTicket = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    viewBox="0 0 20 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.693 0a.676.676 0 0 0-.676.676v3.621c.07-.013.141-.02.214-.02.43 0 .824.23 1.138.612V1.353h15.278v11.613H1.37V9.429c-.314.383-.709.611-1.138.611-.073 0-.144-.006-.214-.019v3.621c0 .373.302.676.676.676h16.63a.676.676 0 0 0 .677-.676V.676A.676.676 0 0 0 17.324 0H.693Z"
      fill="currentColor"
    />
    <path
      d="M0 3.558c2.808 0 2.808 7.203 0 7.203"
      stroke="currentColor"
      strokeWidth={1.353}
    />
    <path
      d="M8.106 4.881c.146-.443.433-.817.81-1.055a1.752 1.752 0 0 1 1.255-.245c.432.08.824.32 1.106.68.283.358.437.813.436 1.283 0 1.326-1.856 1.988-1.856 1.988l.053 1.034M9.91 10.766h.005"
      stroke="currentColor"
      strokeWidth={1.353}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 3.552v7.214"
      stroke="currentColor"
      strokeWidth={0.902}
      strokeLinecap="round"
    />
    <path
      d="M20 4.5a.5.5 0 0 0-1 0h1ZM19.5 16v.5a.5.5 0 0 0 .5-.5h-.5ZM3 15.5a.5.5 0 0 0 0 1v-1Zm16-11V16h1V4.5h-1Zm.5 11H3v1h16.5v-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgIconFileTicket;
