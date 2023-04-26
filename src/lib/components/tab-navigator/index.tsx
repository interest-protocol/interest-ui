import React, { useState } from 'react';

import { Box, Motion, Typography } from '../../elements';
import { Theme, useTheme } from '../../theme';
import { TabsNavigatorProps } from './tabs-navigator.types';

const TabsNavigator: React.FC<TabsNavigatorProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const theme = useTheme() as Theme;

  return (
    <Box margin="0 auto" width="100%" display="flex" flexDirection="column">
      <Box gap=".25rem" display="flex" justifyContent="center">
        {tabs.slice(0, 2).map((tab, index) => (
          <Motion
            key={tab.label}
            cursor="pointer"
            textAlign="center"
            surface="surface1"
            borderRadius=".25rem .25rem 0 0"
            padding="1.5rem .75rem 1.5rem .75rem"
            onClick={() => handleTabClick(index)}
            width={['100%', '100%', '30%', '30%']}
            color={activeIndex === index ? 'primary' : 'text'}
            whileHover={{
              color: theme.colors.primary,
              transition: { duration: 0.2 },
            }}
          >
            <Typography variant="title6">{tab.label}</Typography>
          </Motion>
        ))}
      </Box>

      <Motion
        color="text"
        surface="surface1"
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
        <Box p="3xl">{tabs[activeIndex].content}</Box>
      </Motion>
    </Box>
  );
};

export default TabsNavigator;
