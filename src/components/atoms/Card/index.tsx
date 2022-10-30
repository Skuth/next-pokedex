import React from 'react';

import { Container, ContainerProps } from './styles';

interface CardProps extends ContainerProps {
  children?: React.ReactElement | React.ReactElement[]
}

const Card: React.FC<CardProps> = ({
  children = undefined,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}

export default Card;