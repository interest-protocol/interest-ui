import { StylinComponentProps } from '@stylin.js/react';
import { InputHTMLAttributes, ReactNode } from 'react';

import { BoxProps } from '../../elements';

export type TextFieldElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'translate' | 'height' | 'width'
>;

export interface TextFieldProps
  extends StylinComponentProps,
    TextFieldElementProps {
  error?: string;
  valid?: string;
  SuffixIcon?: ReactNode;
  PrefixIcon?: ReactNode;
  fieldProps?: BoxProps;
}
