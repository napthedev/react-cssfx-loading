import { css, keyframes } from "goober";

import React from "react";

const wave = keyframes`
  from {
    transform: translateY(-60%);
  }
  to {
    transform: translateY(60%);
  }
`;

export interface MessagingProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  duration?: string;
}

const Messaging: React.FC<MessagingProps & React.HTMLProps<HTMLDivElement>> = ({
  className = "",
  color = "#0d6efd",
  width = "1rem",
  height = "1rem",
  style = {},
  duration = "0.4s",
  ...others
}) => {
  const resolvedWidth = typeof width === "number" ? `${width}px` : width;
  const resolvedHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      {...others}
      style={style}
      className={
        css`
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          gap: calc(${resolvedWidth} * 0.5);

          & div {
            width: ${resolvedWidth};
            height: ${resolvedHeight};
            border-radius: 50%;
            background-color: ${color};
            transform: translateY(-100%);
            animation: ${wave} ${duration} ease-in-out alternate infinite;
          }

          & div:nth-of-type(1) {
            animation-delay: calc(${duration} * -0.5);
          }

          & div:nth-of-type(2) {
            animation-delay: calc(${duration} * -0.25);
          }
        ` + ` ${className}`
      }
    >
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Messaging;
