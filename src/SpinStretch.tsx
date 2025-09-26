import { css, keyframes } from "goober";

import React from "react";

const spinStretch = keyframes`
  50% {
    transform: rotate(360deg) scale(0.4, 0.33);
    border-width: 8px;
  }
  100% {
    transform: rotate(720deg) scale(1, 1);
    border-width: 3px;
  }
`;

export interface SpinStretchProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  duration?: string;
}

const SpinStretch: React.FC<SpinStretchProps & React.HTMLProps<HTMLDivElement>> = ({
  className = "",
  color = "#0d6efd",
  width = "2rem",
  height = "2rem",
  style = {},
  duration = "1.2s",
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
          width: ${resolvedWidth};
          height: ${resolvedHeight};
          border: 3px solid transparent;
          border-top-color: ${color};
          border-bottom-color: ${color};
          border-radius: 50%;
          animation: ${spinStretch} ${duration} ease infinite;
        ` + ` ${className}`
      }
    ></div>
  );
};

export default SpinStretch;
