import { css, keyframes } from "@emotion/css";

import React from "react";

const leftSwing = keyframes`
  50%,
  100% {
    transform: translateX(0);
  }
`;

const rightSwing = keyframes`
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

export interface BouncingBallsProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  duration?: string;
}

const BouncingBalls: React.FC<BouncingBallsProps & React.HTMLProps<HTMLDivElement>> = ({
  className = "",
  color = "#0d6efd",
  width = "3rem",
  height = "1rem",
  style = {},
  duration = "0.5s",
  ...others
}) => {
  let resolvedWidth = typeof width === "number" ? `${width}px` : width;
  let resolvedHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <div
      {...others}
      style={style}
      className={
        css`
          display: inline-flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-between;
          width: ${resolvedWidth};

          & div {
            width: calc(${resolvedWidth} / 3);
            height: ${resolvedHeight};
            border-radius: 50%;
            background-color: ${color};
          }

          & div:nth-of-type(1) {
            transform: translateX(-100%);
            animation: ${leftSwing} ${duration} ease-in alternate infinite;
          }

          & div:nth-of-type(3) {
            transform: translateX(0);
            animation: ${rightSwing} ${duration} ease-out alternate infinite;
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

export default BouncingBalls;
