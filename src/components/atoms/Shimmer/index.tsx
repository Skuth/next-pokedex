import React from "react"
import { Container, ContainerProps } from "./styles"

interface ShimmerProps extends ContainerProps {
  customStyle?: React.CSSProperties
}

const Shimmer: React.FC<ShimmerProps> = ({ width = "64px", height = "64px", radius = "0.875rem", customStyle = {} }) => {
  return <Container title="Loading" width={width} height={height} radius={radius} style={{ ...customStyle }} />
}

export default Shimmer
