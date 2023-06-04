import type { ReactNode } from 'react';

export interface TabNavigator {
  label: string;
  content: ReactNode;
}

export interface TabsNavigatorProps {
  tabs: [TabNavigator, TabNavigator];
  onChange?: (index: number) => void;
}
