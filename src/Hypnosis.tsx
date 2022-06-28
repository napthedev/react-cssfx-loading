import { css, keyframes } from "@emotion/css";

import React from "react";

const spin = keyframes`
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export interface HypnosisProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  duration?: string;
}

const Hypnosis: React.FC<HypnosisProps & React.HTMLProps<HTMLDivElement>> = ({
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
          position: relative;
          width: ${resolvedWidth};
          height: ${resolvedHeight};

          & div {
            border: 3px solid transparent;
            border-top-color: ${color};
            border-right-color: ${color};
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) rotate(0);
          }
        ` + ` ${className}`
      }
    >
      <div
        className={css`
          width: ${resolvedWidth};
          height: ${resolvedHeight};
          animation: ${spin} ${duration} linear infinite;
        `}
      ></div>
      <div
        className={css`
          width: calc(${resolvedWidth} * 0.6);
          height: calc(${resolvedHeight} * 0.6);
          animation: ${spin} calc(${duration} * 7 / 8) linear reverse infinite;
        `}
      ></div>
      <div
        className={css`
          width: calc(${resolvedWidth} * 0.8 / 3.5);
          height: calc(${resolvedHeight} * 0.8 / 3.5);
          animation: ${spin} calc(${duration} * 3 / 4) linear infinite;
        `}
      ></div>
    </div>
  );
};

export default Hypnosis;
