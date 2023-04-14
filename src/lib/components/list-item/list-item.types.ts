import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes, ReactNode } from 'react';

export type BoxElementProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'color' | 'translate'
>;

export interface ListItemProps extends StylinComponentProps, BoxElementProps {
  title: string;
  description?: string;
  metadata?: string;
  SuffixIcon?: ReactNode;
  PrefixIcon?: ReactNode;
}
