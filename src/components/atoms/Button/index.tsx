import React from 'react';

import { Container, ContainerProps } from './styles';

interface ButtonProps extends ContainerProps, React.ButtonHTMLAttributes<HTMLElement> {
  children: React.ReactElement | React.ReactElement[]
}

const Button: React.FC<ButtonProps> = ({
  children = undefined,
  padding = "0.75rem 2rem",
  ...rest
}) => {
  return (
    <Container padding={padding} {...rest}>
      {children}
    </Container>
  )
}

export default Button;