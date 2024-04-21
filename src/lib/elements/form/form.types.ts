import { StylinComponentProps } from '@stylin.js/react';
import { FormHTMLAttributes } from 'react';

export type FormElementProps = Omit<
  FormHTMLAttributes<HTMLFormElement>,
  'color' | 'translate' | 'content'
>;

export interface FormProps extends StylinComponentProps, FormElementProps {}
