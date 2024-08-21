import React, { FC, PropsWithChildren, useId } from 'react';

import { Box, Motion, Typography } from '../../elements';
import { Theme, useTheme } from '../../theme';
import { TabItemPropsItemTextProps } from './tabs.types';

const NavItemText: FC<PropsWithChildren<TabItemPropsItemTextProps>> = ({
  isSelected,
  children,
  type,
  px,
}) => {
  const id = useId();
  const { dark } = useTheme() as Theme;

  return (
    <Box
      py="0.635rem"
      role="tabpanel"
      fontFamily="Proto"
      position="relative"
      px={px ?? ['2xl', '2xl', 'xl']}
    >
      <Typography
        zIndex={2}
        size="large"
        variant="label"
        position="relative"
        color={dark ? (isSelected ? '#000' : '#fff') : 'onSurface'}
      >
        {children}
      </Typography>
      {isSelected && (
        <Motion
          zIndex={1}
          top="0"
          left="0"
          bg="#fff"
          width="100%"
          height="100%"
          position="absolute"
          layoutId={`underline-${id}`}
          borderRadius={type == 'circle' ? 'full' : 'xs'}
          boxShadow="0px 2px 4px -2px #0d10170a, 0px 4px 8px -2px #0d10171f"
          nHover={{
            bg: '#fff',
          }}
        />
      )}
    </Box>
  );
};
export default NavItemText;
