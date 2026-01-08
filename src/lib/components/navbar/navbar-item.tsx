import { A, Li } from '@stylin.js/elements';
import React, { FC } from 'react';

import { NavbarItemProps } from './navbar.types';
import { ExternalLinkSVG } from '../../icons';

const NavbarItem: FC<NavbarItemProps> = ({
  title,
  href,
  asPath,
  isExternalLink,
}) => (
  <A
    href={href}
    target={isExternalLink ? '_blank' : '_self'}
    textDecoration="none"
  >
    <Li
      display="flex"
      fontSize="1rem"
      cursor="pointer"
      height="1.375rem"
      fontFamily="Satoshi"
      alignItems="center"
      width="max-content"
      lineHeight="1.5rem"
      borderRadius="0.5rem"
      alignContent="center"
      gap={['0.2rem', '0.5rem']}
      textTransform="capitalize"
      nHover={{ color: '#fff' }}
      transition="all 350ms ease-in-out"
      fontWeight={asPath === href ? '500' : '400'}
      color={asPath === href ? '#fff' : '#9CA3AF'}
    >
      {title}
      {isExternalLink && (
        <ExternalLinkSVG
          maxWidth="1rem"
          maxHeight="1rem"
          role="img"
          width="100%"
          color="#9CA3AF"
        />
      )}
    </Li>
  </A>
);

export default NavbarItem;
