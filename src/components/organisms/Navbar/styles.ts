import styled, { css } from "styled-components";
import { transparentize } from "polished";

import Link from "next/link";

export const NavContainer = styled.div`
  background: ${(props) => props.theme.white};
  box-shadow: 2px 4px 20px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.h1`
  display: inline-block;
`;

export const LogoLink = styled(Link)`
  user-select: none;
`;

export const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

interface ListItemProps {
  isActive?: boolean;
}

export const ListItem = styled.li<ListItemProps>`
  display: block;

  ${(props) =>
    props.isActive &&
    css`
      & > a {
        color: ${(props) => props.theme.primary};
        &::before {
          width: 100%;
        }
      }
    `}
`;

export const ListLink = styled(Link)`
  position: relative;
  display: block;
  padding: 1rem 2rem;

  font-weight: 600;

  color: ${(props) => props.theme.gray2};

  text-transform: uppercase;

  &:hover {
    &::before {
      width: 100%;
    }
  }

  &::before {
    content: "";

    position: absolute;

    width: 0;
    height: 3px;

    bottom: 0;
    left: 0;

    background: ${(props) => props.theme.primary};
    box-shadow: 0 0 20px ${(props) => transparentize(0.5, props.theme.primary)};
    border-radius: 1rem;

    transition: width 0.25s;
  }
`;
