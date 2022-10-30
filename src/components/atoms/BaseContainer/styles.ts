import styled from "styled-components";

export interface ContainerProps {
  maxWidth?: number;
}

export const Container = styled.div<ContainerProps>`
  width: 90%;
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : "1780px")};
  margin: 0 auto;
`;
