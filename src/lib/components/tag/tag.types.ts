import { StylinComponentProps } from '@stylin.js/react';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import { TagSizes, TagVariants } from '../../theme/theme.types';

export type TagElementProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | 'color'
  | 'translate'
  | 'content'
  | 'onAnimationStart'
  | 'onDragStart'
  | 'onDragEnd'
  | 'onDrag'
>;

export interface TagProps
  extends Omit<StylinComponentProps, 'transition'>,
    TagElementProps {
  size?: TagSizes;
  onClose?: () => void;
  PrefixIcon?: ReactNode;
  variant: TagVariants;
}
