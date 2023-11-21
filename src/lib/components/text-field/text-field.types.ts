import { StylinComponentProps } from '@stylin.js/react';
import { InputHTMLAttributes, ReactNode } from 'react';

import { BoxProps } from '../../elements';

export type TextFieldElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'translate' | 'height' | 'width' | 'content'
>;

export interface TextFieldProps
  extends StylinComponentProps,
    TextFieldElementProps {
  label: string;
  suffix?: ReactNode;
  Prefix?: ReactNode;
  fieldProps?: BoxProps;
  supportingText?: string;
  status?: 'error' | 'success' | 'none';
}
