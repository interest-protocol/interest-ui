import React, { FC, useState } from 'react';
import { v4 } from 'uuid';

import { Box } from '../../elements';
import TabItem from './tab-item';
import { TabsProps } from './tabs.types';

export const Tabs: FC<TabsProps> = ({
  items,
  px,
  type,
  width,
  onChangeTab,
  defaultTabIndex = 0,
}) => {
  const [tabIndex, setTabIndex] = useState(defaultTabIndex);

  const handleChangeTab = (index: number) => () => {
    setTabIndex(index);
    onChangeTab?.(index);
  };

  return (
    <Box
      as="nav"
      display="flex"
      flexDirection="row"
      position="relative"
      bg="rgba(0, 0, 0, 0.08)"
      p="0.125rem"
      width={width || 'max-content'}
      minWidth="max-content"
      borderRadius={type == 'circle' ? 'full' : '0.625rem'}
    >
      {items.map((item, index) => (
        <TabItem
          key={v4()}
          px={px}
          item={item}
          type={type}
          isSelected={index === tabIndex}
          onChange={handleChangeTab(index)}
        />
      ))}
    </Box>
  );
};

export * from './tabs.types';
