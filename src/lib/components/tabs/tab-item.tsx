import React, { FC } from 'react';

import { Box } from '../../elements';
import NavItemText from './tab-item-text';
import { TabItemProps } from './tabs.types';

const TabItem: FC<TabItemProps> = ({
  isSelected,
  onChange,
  item,
  type,
  px,
}) => (
  <Box
    display="flex"
    cursor="pointer"
    onClick={onChange}
    alignItems="center"
    bg={isSelected ? '#fff' : 'transparent'}
    borderRadius={type == 'circle' ? 'full' : 'xs'}
    boxShadow={
      isSelected
        ? '0px 2px 4px -2px rgba(13, 16, 23, 0.04), 0px 4px 8px -2px rgba(13, 16, 23, 0.12)'
        : 'unset'
    }
    nHover={{
      bg: isSelected ? '#fff' : 'rgba(0, 83, 219, 0.08)',
    }}
  >
    <NavItemText px={px}>{item}</NavItemText>
  </Box>
);

export default TabItem;
