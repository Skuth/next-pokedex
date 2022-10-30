import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  color: ${(props) => props.theme.textColor};
`;

export const AvatarContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: -64px;

  display: flex;
  align-items: center;
  justify-content: center;

  > .button--fav {
    position: absolute;
    right: 10px;
    top: 50px;
  }
`;

export const InfoContainer = styled.section`
  width: 100%;

  padding: 1rem 0 0 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-weight: 600;
    text-transform: uppercase;
    font-size: 0.875rem;
    color: ${(props) => props.theme.gray2};
  }
`;

export const BadgeContainer = styled.div`
  margin-top: 1rem;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const StatusContainer = styled.section`
  width: 100%;
  text-align: center;
  margin-top: 2rem;
`;

export const StatusContent = styled.div`
  padding: 2rem 0;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  > div {
    p {
      padding: 0.25rem 0.75rem;
      background: ${(props) => transparentize(0.8, props.theme.gray)};
      border-radius: 100rem;
      font-weight: 600;
    }
    span {
      display: block;
      margin-top: 0.5rem;
    }
  }
`;
