import React, { FC, PropsWithChildren } from 'react';

import { Box, Typography } from '../../elements';
import { TabItemProps } from './tabs.types';

const NavItemText: FC<PropsWithChildren<Pick<TabItemProps, 'px'>>> = ({
  children,
  px,
}) => (
  <Box fontFamily="Proto" px={px ?? ['2xl', '2xl', 'xl']} py="0.635rem">
    <Typography variant="label" size="large">
      {children}
    </Typography>
  </Box>
);

export default NavItemText;
