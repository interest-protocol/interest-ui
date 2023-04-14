import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes, ReactNode } from 'react';

export type BoxElementProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'color' | 'translate'
>;

export interface ListProps extends StylinComponentProps, BoxElementProps {
  title: string;
  items: ReadonlyArray<ReactNode>;
}
