import React, { FC, useState } from 'react';
import { v4 } from 'uuid';

import { Box } from '../../elements';
import { Theme, useTheme } from '../../theme';
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
  const { dark } = useTheme() as Theme;
  const [tabIndex, setTabIndex] = useState(defaultTabIndex);

  const handleChangeTab = (index: number) => () => {
    setTabIndex(index);
    onChangeTab?.(index);
  };

  return (
    <Box
      as="nav"
      p="0.125rem"
      display="flex"
      flexDirection="row"
      position="relative"
      minWidth="max-content"
      width={width || 'max-content'}
      bg={dark ? '#ffffff14' : '#00000014'}
      borderRadius={type == 'circle' ? 'full' : '0.625rem'}
      data-testId="tabsTest"
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
