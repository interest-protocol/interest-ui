import React, { FC } from 'react';

import { Box } from '../../elements';
import { Theme, useTheme } from '../../theme';
import NavItemText from './tab-item-text';
import { TabItemProps } from './tabs.types';

const TabItem: FC<TabItemProps> = ({
  isSelected,
  onChange,
  item,
  type,
  px,
}) => {
  const { colors } = useTheme() as Theme;

  return (
    <Box
      display="flex"
      cursor="pointer"
      onClick={onChange}
      alignItems="center"
      borderRadius={type == 'circle' ? 'full' : 'xs'}
      nHover={{
        bg: isSelected ? 'unset' : `${colors.primary}14`,
      }}
    >
      <NavItemText type={type} isSelected={isSelected} px={px}>
        {item}
      </NavItemText>
    </Box>
  );
};
export default TabItem;
