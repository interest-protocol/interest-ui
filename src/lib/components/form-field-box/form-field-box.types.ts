import { DivProps } from '@stylin.js/elements';
import { StylinComponentProps } from '@stylin.js/react';
import { ReactNode, TextareaHTMLAttributes } from 'react';

import { TextFieldElementProps } from '../text-field';

export type TextAreaElementProps = Omit<
  TextareaHTMLAttributes<HTMLInputElement>,
  'color' | 'translate' | 'height' | 'width' | 'content'
>;

export interface TextFieldProps
  extends StylinComponentProps,
    TextFieldElementProps {
  label?: string;
  Suffix?: ReactNode;
  Prefix?: ReactNode;
  fieldProps?: DivProps;
  supportingText?: string;
  status?: 'error' | 'success' | 'none';
}

export interface FormFieldBoxProps extends TextFieldProps {
  isTextArea?: boolean;
}
