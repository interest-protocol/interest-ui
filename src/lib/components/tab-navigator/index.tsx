import React, { useState } from 'react';

import { Box, Typography } from '../../elements';
import { TabsNavigatorProps } from './tabs-navigator.types';

const TabsNavigator: React.FC<TabsNavigatorProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <Box margin="0 auto" width="100%" display="flex" flexDirection="column">
      <Box gap=".25rem" display="flex" justifyContent="center">
        {tabs.slice(0, 2).map((tab, index) => (
          <Box
            key={tab.label}
            color="primary"
            textAlign="center"
            backgroundColor="#1B1B1F"
            borderRadius=".25rem .25rem 0 0"
            padding="1.5rem .75rem 1.5rem .75rem"
            onClick={() => handleTabClick(index)}
            width={['100%', '100%', '30%', '30%']}
            nHover={{
              backgroundColor: 'secondary',
            }}
          >
            <Typography variant="title6">{tab.label}</Typography>
          </Box>
        ))}
      </Box>

      <Box
        background="#1B1B1F"
        color="textPlaceholder"
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
      </Box>
    </Box>
  );
};

export default TabsNavigator;
