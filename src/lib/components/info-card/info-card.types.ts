import { CSSProperties, ReactNode } from 'react';

type MaybeArray<T> = ReadonlyArray<T> | T;

export interface InfoCardProps {
  info: ReactNode;
  title: ReactNode;
  width?: MaybeArray<CSSProperties['width']>;
  onClick?: () => void;
}
