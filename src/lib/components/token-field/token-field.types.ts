import { StylinComponentProps } from '@stylin.js/react';
import { InputHTMLAttributes, ReactNode } from 'react';

import { BoxProps } from '../../elements';

export type TokenFieldElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'translate' | 'height' | 'width' | 'content'
>;

export interface TokenFieldProps
  extends StylinComponentProps,
    TokenFieldElementProps {
  Label?: ReactNode;
  isNotDefaultLabel?: boolean;
  tokenName: string;
  disabled?: boolean;
  getMaxValue?: () => void;
  fieldProps?: BoxProps;
  supportingText?: string;
  TokenIcon?: ReactNode;
  variant?: 'filled' | 'outline';
  labelPosition?: 'left' | 'right';
  status?: 'error' | 'success' | 'none';
}
