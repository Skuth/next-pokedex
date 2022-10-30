import React from 'react';

import { Container, ContainerProps } from './styles';

interface BaseContainerProps extends ContainerProps {
  children: React.ReactElement | React.ReactElement[]
}

const BaseContainer: React.FC<BaseContainerProps> = ({
  children = undefined,
  ...rest
}) => {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}

export default BaseContainer;