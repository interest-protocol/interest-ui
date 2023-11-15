import { CSSProperties, ReactNode } from 'react';

type MaybeArray<T> = ReadonlyArray<T> | T;

export interface customMarginXProps {
  px?: MaybeArray<CSSProperties['padding']>;
}

export interface customWidthProps {
  width?: MaybeArray<CSSProperties['width']>;
}

export interface TabItemProps extends customMarginXProps {
  item: ReactNode;
  isSelected: boolean;
  onChange: () => void;
  type: 'circle' | 'square';
}

export interface TabsProps extends customMarginXProps, customWidthProps {
  defaultTabIndex?: number;
  items: ReadonlyArray<ReactNode>;
  onChangeTab?: (tabIndex: number) => void;
  type: 'circle' | 'square';
}
