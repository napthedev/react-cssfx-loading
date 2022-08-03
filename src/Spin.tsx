import { css, keyframes } from "goober";

import React from "react";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export interface SpinProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  duration?: string;
}

const Spin: React.FC<SpinProps & React.HTMLProps<HTMLDivElement>> = ({
  className = "",
  color = "#0d6efd",
  width = "2rem",
  height = "2rem",
  style = {},
  duration = "1.2s",
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
          border: 3px solid ${color}33;
          border-top-color: ${color};
          border-radius: 50%;
          width: ${resolvedWidth};
          height: ${resolvedHeight};
          animation: ${spin} 1s linear infinite;
        ` + ` ${className}`
      }
    ></div>
  );
};

export default Spin;
