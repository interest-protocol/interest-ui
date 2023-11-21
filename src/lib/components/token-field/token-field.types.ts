import { StylinComponentProps } from '@stylin.js/react';
import { FC, InputHTMLAttributes } from 'react';

import { BoxProps } from '../../elements';
import { SVGProps } from '../../icons/icons.types';

export type TokenFieldElementProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'color' | 'translate' | 'height' | 'width' | 'content'
>;

export interface TokenFieldProps
  extends StylinComponentProps,
    TokenFieldElementProps {
  label?: string;
  tokenName: string;
  disabled?: boolean;
  fieldProps?: BoxProps;
  supportingText?: string;
  TokenIcon?: FC<SVGProps>;
  variant?: 'filled' | 'outline';
  labelPosition?: 'left' | 'right';
  status?: 'error' | 'success' | 'none';
}
