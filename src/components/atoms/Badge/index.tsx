import React from 'react';

import { Container, ContainerProps } from './styles';

interface BadgeProps extends ContainerProps {
  text: string
}

const Badge: React.FC<BadgeProps> = ({
  text,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <p>{text}</p>
    </Container>
  )
}

export default Badge;