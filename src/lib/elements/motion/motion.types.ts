import { CustomDomComponent } from 'framer-motion';

import { BoxProps } from '../box';

export type MotionProps = Omit<
  BoxProps,
  'transition' | 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'
>;

export type MotionComponent = CustomDomComponent<MotionProps>;
