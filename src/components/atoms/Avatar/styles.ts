import styled from "styled-components";

interface ContainerProps {
  width: number;
  height: number;
  bgColor: `${string}, ${string}, ${string}`;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};

  display: grid;
  place-items: center;

  border-radius: 100%;

  background: rgb(${(props) => props.bgColor});

  p {
    font-size: ${(props) => `${(props.width + props.height) / 5}px`};
    color: #ffffff;
  }
`;
