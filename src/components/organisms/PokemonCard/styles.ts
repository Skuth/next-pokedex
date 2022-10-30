import styled from "styled-components";

export const CardLink = styled.button`
  cursor: pointer !important;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${(props) => props.theme.textColor};
`;

export const AvatarContainer = styled.div`
  margin-top: -64px;
`;

export const InfoContainer = styled.div`
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
