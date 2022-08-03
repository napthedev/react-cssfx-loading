import { css, keyframes } from "goober";

import React from "react";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
`;

export interface TwinSpinProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  duration?: string;
}

const TwinSpin: React.FC<TwinSpinProps & React.HTMLProps<HTMLDivElement>> = ({
  className = "",
  color = "#0d6efd",
  width = "2rem",
  height = "2rem",
  style = {},
  duration = "0.6s",
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
          display: flex;
          width: ${resolvedWidth};
          height: ${resolvedHeight};
          border: 3px solid transparent;
          border-top-color: ${color};
          border-bottom-color: ${color};
          border-radius: 50%;
          animation: ${spin} calc(${duration} * 2.5) linear infinite;

          &::before {
            content: "";
            display: block;
            margin: auto;
            width: calc(${resolvedWidth} * 0.75 / 3.5);
            height: calc(${resolvedHeight} * 0.75 / 3.5);
            border: 3px solid ${color};
            border-radius: 50%;
            animation: ${pulse} ${duration} alternate ease-in-out infinite;
          }
        ` + ` ${className}`
      }
    ></div>
  );
};

export default TwinSpin;
