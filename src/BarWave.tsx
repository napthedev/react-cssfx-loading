import { css, keyframes } from "goober";
import React from "react";

const grow = keyframes`
  0%, 100% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(2);
  }
`;

export interface BarWaveProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  duration?: string;
}

const BarWave: React.FC<BarWaveProps & React.HTMLProps<HTMLDivElement>> = ({
  className = "",
  color = "#0d6efd",
  width = "2rem",
  height = "1rem",
  style = {},
  duration = "1s",
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
          justify-content: space-between;
          width: ${resolvedWidth};

          & span {
            width: calc(${resolvedWidth} / 4 * 3 / 4);
            height: ${resolvedHeight};
            background-color: ${color};
          }

          & span:nth-of-type(1) {
            animation: ${grow} ${duration} -0.45s ease-in-out infinite;
          }

          & span:nth-of-type(2) {
            animation: ${grow} ${duration} -0.3s ease-in-out infinite;
          }

          & span:nth-of-type(3) {
            animation: ${grow} ${duration} -0.15s ease-in-out infinite;
          }

          & span:nth-of-type(4) {
            animation: ${grow} ${duration} ease-in-out infinite;
          }
        ` + ` ${className}`
      }
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BarWave;
