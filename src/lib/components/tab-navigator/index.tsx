import React, { FC, useState } from 'react';

import { Box, Motion, Typography } from '../../elements';
import { Theme, useTheme } from '../../theme';
import type { TabsNavigatorProps } from './tabs-navigator.types';

export const TabsNavigator: FC<TabsNavigatorProps> = ({ tabs, onChange }) => {
  const theme = useTheme() as Theme;
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
            padding="1.5rem .75rem 1.5rem .75rem"
            backgroundColor={theme.colors.surface.container}
            onClick={() => handleTabClick(index)}
            width={['100%', '100%', '30%', '30%']}
            color={
              activeIndex === index
                ? theme.colors.primary.primary
                : theme.colors.onSurface
            }
            whileHover={{
              color: theme.colors.primary.primary,
              transition: { duration: 0.2 },
            }}
          >
            <Typography variant="title6">{tab.label}</Typography>
          </Motion>
        ))}
      </Box>

      <Motion
        color={`${theme.colors.onSurface}`}
        backgroundColor={theme.colors.surface.container}
        overflow="hidden"
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
