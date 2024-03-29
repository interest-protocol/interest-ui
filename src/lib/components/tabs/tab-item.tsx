import React, { FC } from 'react';

import { Box } from '../../elements';
import NavItemText from './tab-item-text';
import { TabItemProps } from './tabs.types';

const TabItem: FC<TabItemProps> = ({ isSelected, onChange, item, px }) => (
  <Box
    display="flex"
    cursor="pointer"
    onClick={onChange}
    alignItems="center"
    color={isSelected ? 'primary' : 'onSurface'}
  >
    <NavItemText isSelected={isSelected} px={px}>
      {item}
    </NavItemText>
  </Box>
);

export default TabItem;
