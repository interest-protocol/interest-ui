import { FC } from 'react';

import { CheckSVG, ExclamationSVG, WarningSVG } from '../../icons';
import { SVGProps } from '../../icons/icons.types';

export const COLOR_MAP: Record<string, string> = {
  warning: 'warning',
  info: 'primary',
  success: 'success',
  error: 'error',
};

export const STATUS_ICON: Record<string, FC<SVGProps>> = {
  error: WarningSVG,
  warning: ExclamationSVG,
  info: ExclamationSVG,
  success: CheckSVG,
};
