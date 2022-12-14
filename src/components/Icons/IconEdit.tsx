import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgIconEdit = ({
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
    <path d="m12.5 7.5-6.572 6.572c-.212.212-.319.319-.388.45-.07.13-.1.277-.159.572l-.734 3.67c-.066.333-.1.5-.005.594.095.095.26.061.593-.005l3.671-.734c.295-.06.442-.089.573-.159.13-.07.237-.176.45-.388L16.5 11.5l-4-4Z" />
    <path
      d="m5.954 19.38.026-.007 2.628-.657.049-.012c.218-.054.429-.106.62-.215.192-.108.345-.262.504-.421l.035-.036 7.194-7.194.027-.026c.31-.31.585-.585.776-.836.207-.271.373-.585.373-.976s-.166-.705-.373-.976c-.191-.251-.466-.525-.776-.836l-.027-.026-.172-.172-.026-.027c-.31-.31-.585-.584-.836-.776-.271-.207-.585-.373-.976-.373s-.705.166-.976.373c-.251.192-.525.466-.836.776l-.027.027-7.194 7.194-.035.035c-.16.16-.313.313-.421.504-.109.191-.161.402-.215.62l-.012.049-.664 2.654-.007.03c-.039.153-.083.328-.097.476-.016.165-.015.464.227.705.24.242.54.243.705.227.148-.014.323-.058.477-.097l.029-.007ZM12.5 7.5l4 4"
      stroke="currentColor"
      strokeWidth={1.2}
    />
  </svg>
);

export default SvgIconEdit;
