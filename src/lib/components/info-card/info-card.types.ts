import { ReactNode } from 'react';

export interface InfoCardProps {
  info: string;
  title: string;
  IconInfo: ReactNode;
  IconTitle: ReactNode;
  iconInfoColor: 'success' | 'error';
  infoColor: 'success' | 'error' | 'normal';
  onClick?: () => void;
}
