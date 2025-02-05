import { ReactNode } from 'react';

import { MotionProps } from '../../elements';

export interface TooltipProps extends MotionProps {
  tooltipContentMaxWidth?: string;
  tooltipContent: string | ReactNode;
}
