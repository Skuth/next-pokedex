import React from 'react';

interface ConditionContainerProps {
  if: boolean
  children?: React.ReactElement | React.ReactElement[]
}

const ConditionContainer: React.FC<ConditionContainerProps> = ({
  if: ifStatement,
  children = null
}) => {
  return !!ifStatement ? (
    <>
      {children}
    </>
  ) : null
}

export default ConditionContainer;