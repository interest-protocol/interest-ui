import { ReactNode } from 'react';

export interface TabItemProps {
  item: ReactNode;
  isSelected: boolean;
  onChange: () => void;
}

export interface TabItemPropsItemTextProps {
  isSelected?: boolean;
}

export interface TabsProps {
  defaultTabIndex?: number;
  items: ReadonlyArray<ReactNode>;
  onChangeTab?: (tabIndex: number) => void;
}
