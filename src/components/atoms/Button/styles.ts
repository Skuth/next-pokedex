import styled, { css } from "styled-components";
import { darken, transparentize } from "polished";

import { BaseColorTheme } from "../../../styles/Theme";

export interface ContainerProps {
  width?: string;
  height?: string;
  padding?: string | `${string} ${string}`;
  borderRadius?: string;
  bgColor?: keyof BaseColorTheme;
  bgTransparentize?: number;
  bgHoverDarken?: number;
  textColor?: keyof BaseColorTheme;
}

export const Container = styled.button<ContainerProps>`
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}

  padding: ${(props) => props.padding ?? 0};
  border-radius: ${(props) => props.borderRadius ?? "0.5rem"};
  background: ${(props) =>
    transparentize(
      props.bgTransparentize ?? 0,
      (props.bgColor && props.theme[props.bgColor]) ?? props.theme.primary
    )};
  color: ${(props) =>
    (props.textColor && props.theme[props.textColor]) ?? "#ffffff"};
  font-weight: 600;
  transition: background-color 0.25s;

  display: grid;
  place-items: center;

  &:hover {
    background: ${(props) =>
      darken(
        props.bgHoverDarken ?? 0.1,
        transparentize(
          props.bgTransparentize ?? 0,
          (props.bgColor && props.theme[props.bgColor]) ?? props.theme.primary
        )
      )};
  }
`;
