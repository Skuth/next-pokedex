import React, { useCallback } from 'react';

import { Card, Avatar } from '../../atoms';
import { Badge } from '../../molecules';

import { CardLink, Container, AvatarContainer, InfoContainer, BadgeContainer } from './styles';

import { usePokemon } from '../../../hooks/pokemon';

import { IPokemon } from '../../../interface';

interface PokemonCardProps {
  pokemon: IPokemon
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon
}) => {
  const { selectPokemon } = usePokemon()

  const handleCardClick = useCallback(() => {
    selectPokemon(pokemon.id)
  }, [pokemon, selectPokemon])

  return (
    <CardLink onClick={handleCardClick} className="fadeIn">
      <Card hasHover hasShadow>
        <Container>
          <AvatarContainer>
            <Avatar
              loading="lazy"
              name={pokemon.name.english}
              width={64}
              height={64}
              src={pokemon.image.sprit}
            />
          </AvatarContainer>

          <InfoContainer>
            <span>N&#186; {pokemon.id}</span>

            <h2>{pokemon.name.english}</h2>

            <BadgeContainer>
              {pokemon.type.map(type => (
                <Badge key={`${pokemon.id}-${type.text}`} text={type.text} bgColor={type.color} />
              ))}
            </BadgeContainer>
          </InfoContainer>
        </Container>
      </Card>
    </CardLink>
  )
}

export default PokemonCard;