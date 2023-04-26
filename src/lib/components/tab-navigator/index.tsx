import React, { useState } from 'react';

import { Box } from '../../elements';
import { TabsNavigatorProps } from './tabs-navigator.types';

const TabsNavigator: React.FC<TabsNavigatorProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Box display="flex" gap=".25rem" justifyContent="center">
        {tabs.map((tab, index) => (
          <Box
            flex="1"
            key={tab.label}
            textAlign="center"
            onClick={() => handleTabClick(index)}
            padding="1.5rem .75rem 1.5rem .75rem"
            backgroundColor={activeIndex === index ? 'primary' : 'white'}
          >
            {tab.label}
          </Box>
        ))}
      </Box>
      <Box width="100%" background="primary" height="20rem">
        {tabs[activeIndex].content}
      </Box>
    </>
  );
};

export default TabsNavigator;
