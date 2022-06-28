import { css, keyframes } from "@emotion/css";

import React from "react";

const spin = keyframes`
  to {
    transform: rotateY(540deg);
  }
`;

export interface CoinProps {
  className?: string;
  color?: string;
  width?: number | string;
  height?: number | string;
  style?: React.CSSProperties;
  duration?: string;
}

const Coin: React.FC<CoinProps & React.HTMLProps<HTMLDivElement>> = ({
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
          perspective: 9999px;
        ` + ` ${className}`
      }
    >
      <div
        className={css`
          width: ${resolvedWidth};
          height: ${resolvedHeight};
          border-radius: 50%;
          border: calc(${resolvedWidth} / 8) solid ${color};
          animation: ${spin} ${duration} ease-in-out infinite;
        `}
      ></div>
    </div>
  );
};

export default Coin;
