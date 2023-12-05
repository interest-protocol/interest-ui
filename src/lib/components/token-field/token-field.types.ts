import { StylinComponentProps } from '@stylin.js/react';
import { FC, InputHTMLAttributes, ReactNode } from 'react';

import { BoxProps } from '../../elements';
import { SVGProps } from '../../icons/icons.types';

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
  onClick?: () => void;
  fieldProps?: BoxProps;
  supportingText?: string;
  TokenIcon?: FC<SVGProps>;
  variant?: 'filled' | 'outline';
  labelPosition?: 'left' | 'right';
  status?: 'error' | 'success' | 'none';
}
