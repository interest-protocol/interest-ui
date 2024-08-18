import { StylinComponentProps } from '@stylin.js/react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import { MotionProps } from '../../elements';

export type DropdownButtonElementProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'color' | 'translate' | 'height' | 'width' | 'content' | 'onClick'
>;

export interface DropdownButtonProps
  extends StylinComponentProps,
    DropdownButtonElementProps {
  label?: string;
  title?: string;
  Icon: ReactNode;
  disabled?: boolean;
  selected?: boolean;
  onClick?: () => void;
  containerProps?: MotionProps;
}
