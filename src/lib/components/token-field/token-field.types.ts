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
  active?: boolean;
  balance?: string;
  activeBg?: string;
  tokenName: string;
  Suffix?: ReactNode;
  disabled?: boolean;
  TokenIcon?: ReactNode;
  fieldProps?: BoxProps;
  handleMax?: () => void;
  onActivate?: () => void;
  variant?: 'filled' | 'outline';
  status?: 'error' | 'success' | 'none';
}
