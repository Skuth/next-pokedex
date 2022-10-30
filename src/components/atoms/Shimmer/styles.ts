import styled, { keyframes } from "styled-components";
import { darken, transparentize } from "polished";

const shimmer = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
`;

export interface ContainerProps {
  width?: string;
  height?: string;
  radius?: string;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};

  position: relative;
  overflow: hidden;
  background: ${(props) => transparentize(0.6, props.theme.shimmerColor)};

  transform: translateZ(0);
  mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);

  -webkit-transform: translateZ(0);
  -webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);

  &::after {
    content: "";
    position: absolute;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    animation: ${shimmer} 2s infinite;
    background-image: linear-gradient(
      90deg,
      ${(props) => transparentize(10, props.theme.shimmerColor)},
      ${(props) => transparentize(0.8, darken(0.1, props.theme.shimmerColor))}
        20%,
      ${(props) => transparentize(0.5, darken(0.1, props.theme.shimmerColor))}
        60%,
      ${(props) => transparentize(10, props.theme.shimmerColor)}
    );
  }
`;
