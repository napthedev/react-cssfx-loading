import { css, keyframes } from "@emotion/css";

import React from "react";

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
`;

export interface CircularProgressProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  duration?: string;
}

const CircularProgress: React.FC<CircularProgressProps & React.SVGProps<SVGSVGElement>> = ({
  className = "",
  color = "#0d6efd",
  width = "3rem",
  height = "3rem",
  style = {},
  duration = "2s",
  ...others
}) => {
  let resolvedWidth = typeof width === "number" ? `${width}px` : width;
  let resolvedHeight = typeof height === "number" ? `${height}px` : height;

  return (
    <svg
      {...others}
      crossOrigin="anonymous"
      viewBox="25 25 50 50"
      style={style}
      className={
        css`
          width: ${resolvedWidth};
          height: ${resolvedHeight};
          transform-origin: center;
          animation: ${rotate} ${duration} linear infinite;
        ` + ` ${className}`
      }
    >
      <circle
        className={css`
          fill: none;
          stroke: ${color};
          stroke-width: 3;
          stroke-dasharray: 1, 200;
          stroke-dashoffset: 0;
          stroke-linecap: round;
          animation: ${dash} calc(${duration} * 3 / 4) ease-in-out infinite;
        `}
        cx="50"
        cy="50"
        r="20"
      ></circle>
    </svg>
  );
};

export default CircularProgress;
