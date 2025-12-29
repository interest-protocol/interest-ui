import { Nav } from '@stylin.js/elements';
import React, { FC } from 'react';

import NavbarItem from './navbar-item';
import { NavbarProps } from './navbar.types';

const Navbar: FC<NavbarProps> = ({ Routes, data, asPath }) => (
  <Nav
    py="1rem"
    px="2rem"
    gap="2rem"
    zIndex="3"
    position="relative"
    borderRadius="2rem"
    alignItems="center"
    justifyContent="center"
    transition="all 350ms ease-in-out"
    width="max-content"
    mx="auto"
    nHover={{
      bg: '#9CA3AF33',
      backdropFilter: 'blur(8px)',
      boxShadow: '0px 0px 0px 1px #9CA3AF4D',
    }}
    display={['none', 'none', 'none', 'flex', 'flex']}
  >
    {Object.entries(data).map(([key, title]) => (
      <NavbarItem
        key={key}
        href={Routes[key].href}
        isExternalLink={Routes[key].isExternalLink}
        title={title}
        asPath={asPath}
      />
    ))}
  </Nav>
);

export default Navbar;
