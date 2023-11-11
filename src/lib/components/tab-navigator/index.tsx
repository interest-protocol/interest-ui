import React, { FC, useState } from 'react';

import { Box, Motion, Typography } from '../../elements';
import { Theme, useTheme } from '../../theme';
import type { TabsNavigatorProps } from './tabs-navigator.types';

export const TabsNavigator: FC<TabsNavigatorProps> = ({ tabs, onChange }) => {
  const { colors } = useTheme() as Theme;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    onChange?.(index);
  };

  return (
    <Box margin="0 auto" width="100%" display="flex" flexDirection="column">
      <Box gap=".25rem" display="flex" justifyContent="center">
        {tabs.map((tab, index) => (
          <Motion
            key={tab.label}
            cursor="pointer"
            textAlign="center"
            borderRadius=".25rem .25rem 0 0"
            backgroundColor="surface.container"
            padding="1.5rem .75rem 1.5rem .75rem"
            onClick={() => handleTabClick(index)}
            width={['100%', '100%', '30%', '30%']}
            color={activeIndex === index ? 'primary' : 'onSurface'}
            whileHover={{
              color: colors.primary,
              transition: { duration: 0.2 },
            }}
          >
            <Typography variant="displayMedium">{tab.label}</Typography>
          </Motion>
        ))}
      </Box>

      <Motion
        color="onSurface"
        overflow="hidden"
        backgroundColor="surface.container"
        borderRadius={
          activeIndex === 0
            ? '.25rem 0 .25rem .25rem'
            : '0 .25rem .25rem .25rem'
        }
        marginLeft={
          activeIndex !== 0 ? ['unset', 'unset', 'auto', 'auto'] : 'unset'
        }
        width={['unset', 'unset', 'calc(50% - .125rem)', 'calc(50% - .125rem)']}
      >
        <Box>{tabs[activeIndex].content}</Box>
      </Motion>
    </Box>
  );
};
