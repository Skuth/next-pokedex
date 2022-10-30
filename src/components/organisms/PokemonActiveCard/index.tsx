import React, { useCallback } from 'react';

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

import { Card, Avatar } from '../../atoms';
import { Badge } from '../../molecules';

import { Container, AvatarContainer, InfoContainer, BadgeContainer, StatusContainer, StatusContent } from './styles';

import { useTheme } from 'styled-components';

import { usePokemon } from '../../../hooks/pokemon';
import { useFavorites } from '../../../store/favorites';

const PokemonActiveCard: React.FC = () => {
  const theme = useTheme()

  const { activePokemon: pokemon } = usePokemon()

  const favorites = useFavorites(state => state.favorites)
  const addFavorite = useFavorites(state => state.addFavorite)
  const removeFavorite = useFavorites(state => state.removeFavorite)

  const isPokemonFavorite = favorites.find(item => item.id === pokemon.id)

  const handleFavoriteClick = useCallback(() => {
    if (isPokemonFavorite) {
      removeFavorite(pokemon.id)
    } else {
      addFavorite(pokemon)
    }
  }, [isPokemonFavorite, addFavorite, removeFavorite, pokemon])

  const IconState = isPokemonFavorite ? AiFillHeart : AiOutlineHeart
  const IconColor = isPokemonFavorite ? theme.primary : theme.textColor

  return pokemon?.id ? (
    <Card hasShadow>
      <Container className="fadeIn">
        <AvatarContainer>
          <Avatar
            name={pokemon.name.english}
            width={64}
            height={64}
            src={pokemon.image.thumbnail}
          />

          <button
            type="button"
            aria-label='Favorite'
            onClick={handleFavoriteClick}
          >
            <IconState color={IconColor} size={22} />
          </button>
        </AvatarContainer>

        <InfoContainer>
          <span>N&#186; {pokemon.id}</span>

          <h2>{pokemon.name.english}</h2>
          {Object.entries(pokemon.name).map(([key, data]) => key !== "english" ? (
            <span key={key}>{data}</span>
          ) : null)}

          <BadgeContainer>
            {pokemon.type.map(type => (
              <Badge key={`${pokemon.id}-${type.text}`} text={type.text} bgColor={type.color} />
            ))}
          </BadgeContainer>

          <StatusContainer>
            <h2>Status</h2>

            <StatusContent>
              {Object.entries(pokemon.base).map(([title, status]) => (
                <div key={title}>
                  <p>{title}</p>
                  <span>{status}</span>
                </div>
              ))}
            </StatusContent>
          </StatusContainer>
        </InfoContainer>
      </Container>
    </Card>
  ) : null
}

export default PokemonActiveCard;