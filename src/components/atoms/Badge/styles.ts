import styled from "styled-components";
import { darken, transparentize } from "polished";

export interface ContainerProps {
  bgColor?: string;
}

export const Container = styled.div<ContainerProps>`
  display: inline-block;

  user-select: none;

  padding: 0.5rem 1.25rem;
  border-radius: 0.5rem;
  text-align: center;
  text-transform: capitalize;

  font-weight: bold;
  font-size: 1rem;

  background: ${(props) => props.bgColor ?? props.theme.primary};
  box-shadow: 0 0 20px
    ${(props) => transparentize(0.7, props.bgColor ?? props.theme.primary)};

  color: ${(props) => darken(0.25, props.bgColor ?? props.theme.primary)};
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.75);
`;
