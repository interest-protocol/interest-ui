interface TabNavigator {
  label: string;
  content: React.ReactNode;
}

export interface TabsNavigatorProps {
  tabs: TabNavigator[];
}
