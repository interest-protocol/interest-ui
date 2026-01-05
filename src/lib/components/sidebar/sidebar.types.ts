import { ReactNode } from 'react';
import { IDirectionalMenuProps } from './directional-menu/directional-menu.types';

export interface SidebarProps extends IDirectionalMenuProps {
  SidebarContent: ReactNode;
}
