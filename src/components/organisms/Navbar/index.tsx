import React, { useCallback } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { BaseContainer } from '../../atoms';

import { NavContainer, Container, LogoContainer, LogoLink, ListContainer, ListItem, ListLink } from './styles';

import { navItems } from '../../../data';

const Navbar: React.FC = () => {
  const { asPath } = useRouter()

  const checkActiveLink = useCallback((link: string): boolean => {
    if (link === "/") {
      return asPath === link
    }

    return asPath.includes(link)
  }, [asPath])

  return (
    <NavContainer>
      <BaseContainer>
        <Container>
          <ListContainer>
            <ListItem>
              <LogoContainer>
                <LogoLink href="/">
                  <Image src="/logo.svg" alt="Pokedex Logo" width={32} height={32} />
                  Pokedex
                </LogoLink>
              </LogoContainer>
            </ListItem>
          </ListContainer>

          <ListContainer>
            {navItems.map(item => (
              <ListItem key={`${item.text}-${item.path}`} isActive={checkActiveLink(item.path)}>
                <ListLink href={item.path}>
                  {item.text}
                </ListLink>
              </ListItem>
            ))}
          </ListContainer>
        </Container>
      </BaseContainer>
    </NavContainer>
  )
}

export default Navbar;