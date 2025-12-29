import { ReactNode } from 'react';

export interface CollapseCardInfoLineProps {
  info: CollapseCardIInfoLineElementProps;
  value: CollapseCardIInfoLineElementProps;
}

export interface CollapseCardIInfoLineElementProps {
  description: string;
  Suffix?: ReactNode;
  Prefix?: ReactNode;
  type?: CollapseCardInfoLineElementType;
}

export type CollapseCardInfoLineElementType = 'success' | 'danger' | 'normal';

export interface CollapseCardInfoHeaderProps {
  toggle: () => void;
  isOpen: boolean;
  title: string;
}

export interface CollapseCardInfoProps {
  title: string;
  data: ReadonlyArray<CollapseCardInfoLineProps>;
}
