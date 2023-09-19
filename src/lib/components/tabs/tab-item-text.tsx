import React, { FC, PropsWithChildren } from 'react';

import { Box, Motion, Typography } from '../../elements';
import { TabItemPropsItemTextProps } from './tabs.types';

const NavItemText: FC<PropsWithChildren<TabItemPropsItemTextProps>> = ({
  children,
  isSelected,
  px,
}) => (
  <Box fontFamily="'Roboto'" px={px ?? ['2xl', '2xl', '2.75rem']}>
    <Typography variant="small" py="m">
      {children}
    </Typography>
    {isSelected && (
      <Motion
        p="3xs"
        mx="auto"
        bg="primary"
        width="1.875rem"
        layoutId="underline"
        borderTopLeftRadius="s"
        borderTopRightRadius="s"
      />
    )}
  </Box>
);

export default NavItemText;
