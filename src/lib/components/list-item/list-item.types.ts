import { ReactNode } from 'react';

import { BoxProps } from '../../elements';

export interface ListItemProps extends BoxProps {
  title: string;
  metadata?: string;
  disabled?: boolean;
  description?: string;
  SuffixIcon?: ReactNode;
  PrefixIcon?: ReactNode;
  onClick?: () => void;
}
