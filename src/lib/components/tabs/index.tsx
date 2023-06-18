import React, { FC, useState } from 'react';
import { v4 } from 'uuid';

import { Box } from '../../elements';
import TabItem from './tab-item';
import { TabsProps } from './tabs.types';

export const Tabs: FC<TabsProps> = ({
  items,
  onChangeTab,
  defaultTabIndex = 0,
}) => {
  const [tabIndex, setTabIndex] = useState(defaultTabIndex);

  const handleChangeTab = (index: number) => () => {
    setTabIndex(index);
    onChangeTab?.(index);
  };

  return (
    <Box as="nav" display="flex" flexDirection="row" position="relative">
      {items.map((item, index) => (
        <TabItem
          key={v4()}
          item={item}
          isSelected={index === tabIndex}
          onChange={handleChangeTab(index)}
        />
      ))}
    </Box>
  );
};

export * from './tabs.types';
