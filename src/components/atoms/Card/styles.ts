import styled, { css } from "styled-components";
import { darken } from "polished";

export interface ContainerProps {
  bgColor?: string;
  hasShadow?: boolean;
  hasHover?: boolean;
}

export const Container = styled.div<ContainerProps>`
  cursor: default;

  background: ${(props) => props.bgColor ?? "#ffffff"};
  padding: 2rem 1rem;
  border-radius: ${(props) => props.theme.borderRadius};

  overflow: visible;

  ${(props) =>
    props.hasShadow &&
    css`
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    `}

  ${(props) =>
    props.hasHover &&
    css`
      transition: box-shadow 0.25s, background-color 0.25s;

      &:hover {
        background: ${darken(0.05, props.bgColor ?? "#ffffff")};
        box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.25);
      }
    `}
`;
