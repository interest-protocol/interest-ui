import { ReactNode } from 'react';

import { MotionProps } from '../../elements';

export interface TooltipProps extends MotionProps {
  tooltipContent: string | ReactNode;
  tooltipPosition: 'top' | 'bottom' | 'left' | 'right';
}
