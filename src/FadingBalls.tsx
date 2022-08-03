import { css, keyframes } from "goober";

import React from "react";

const fade = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export interface FadingBallsProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  duration?: string;
}

const FadingBalls: React.FC<FadingBallsProps & React.HTMLProps<HTMLDivElement>> = ({
  className = "",
  color = "#0d6efd",
  width = "4rem",
  height = "1rem",
  style = {},
  duration = "0.8s",
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
          width: ${resolvedWidth};
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: space-between;

          & div {
            width: calc(${resolvedWidth} / 4);
            height: ${resolvedHeight};
            border-radius: 50%;
            background-color: ${color};
            animation: ${fade} ${duration} ease-in-out alternate infinite;
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

export default FadingBalls;
