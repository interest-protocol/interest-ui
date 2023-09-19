import { CSSProperties, ReactNode } from 'react';

type MaybeArray<T> = ReadonlyArray<T> | T;

export interface customMarginXProps {
  px: MaybeArray<CSSProperties['padding']>;
}
export interface TabItemProps extends customMarginXProps {
  item: ReactNode;
  isSelected: boolean;
  onChange: () => void;
}

export interface TabItemPropsItemTextProps extends customMarginXProps {
  isSelected?: boolean;
}

export interface TabsProps extends customMarginXProps {
  defaultTabIndex?: number;
  items: ReadonlyArray<ReactNode>;
  onChangeTab?: (tabIndex: number) => void;
}
