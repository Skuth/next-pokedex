import { useState, useCallback } from "react";
import Image, { ImageProps } from "next/image";

import { ConditionContainer } from "../";

import { Container } from "./styles";

interface AvatarProps extends Omit<ImageProps, "alt"> {
  name: string
  width: number
  height: number
}

const Avatar: React.FC<AvatarProps> = ({
  name,
  width,
  height,
  ...rest
}) => {
  const [isValidImage, setValidImage] = useState(true)

  const handleImageError = useCallback(() => {
    setValidImage(false)
  }, [])

  const getNameInitials = useCallback(() => {
    const splittedName = name.split(" ")

    if (splittedName.length < 2) {
      return splittedName[0][0]
    } else if (splittedName.length >= 2) {
      return `${splittedName[0][0]}${splittedName[1][0]}`
    } else {
      return "A"
    }
  }, [name])

  const randomIn = useCallback((start: number, end: number) => {
    const randomNumber = Math.floor((Math.random() * (start - end)) + end)

    return randomNumber
  }, [])

  const getRandomColor = useCallback((): `${string}, ${string}, ${string}` => {
    const r = randomIn(50, 255)
    const g = randomIn(50, 255)
    const b = randomIn(50, 255)

    return `${r}, ${g}, ${b}`
  }, [randomIn])

  return (
    <>
      <ConditionContainer if={!!isValidImage}>
        <Image alt={name} width={width} height={height} {...rest} onError={() => handleImageError()} />
      </ConditionContainer>

      <ConditionContainer if={!isValidImage}>
        <Container width={width} height={height} bgColor={getRandomColor()}>
          <p>{getNameInitials()}</p>
        </Container>
      </ConditionContainer>
    </>
  )
}

export default Avatar;