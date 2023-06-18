import { ReactNode } from 'react';

export interface InfoCardProps {
  info: ReactNode;
  title: ReactNode;
  onClick?: () => void;
}
