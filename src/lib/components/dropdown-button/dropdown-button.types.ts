import { StylinComponentProps } from '@stylin.js/react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export type DropdownButtonElementProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'color' | 'translate' | 'height' | 'width' | 'content'
>;

export interface DropdownButtonProps
  extends StylinComponentProps,
    DropdownButtonElementProps {
  label?: string;
  title: string;
  disabled?: boolean;
  PrefixIcon: ReactNode;
}
