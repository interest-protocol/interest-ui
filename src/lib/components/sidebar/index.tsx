import { Div, P, A } from '@stylin.js/elements';
import React, { FC, useState } from 'react';

import { ListSVG } from '../../icons';
import DirectionalMenu from './directional-menu';
import { SidebarProps } from './sidebar.types';
import { AnimatePresence } from 'framer-motion';

const Sidebar: FC<SidebarProps> = ({
  isDirectionalRight,
  onClose,
  SidebarContent,
}) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
    onClose?.();
  };

  return (
    <Div>
      <Div color="#9CA3AF" cursor="pointer" onClick={toggleMenu} role="button">
        <Div display="flex" alignItems="center">
          <ListSVG width="100%" maxWidth="1.25rem" maxHeight="1.25rem" />
        </Div>
      </Div>
      <AnimatePresence>
        {open && (
          <DirectionalMenu
            onClose={toggleMenu}
            isDirectionalRight={isDirectionalRight}
          >
            {SidebarContent}
          </DirectionalMenu>
        )}
      </AnimatePresence>
    </Div>
  );
};

export default Sidebar;
