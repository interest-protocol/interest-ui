// import { FC } from 'react';

// type TagVariants = 'filled' | 'outline';
// type TagSizes = 'small' | 'medium' | 'large';

// export interface TagProps {
//   size: TagSizes;
//   label: string;
//   dismiss?: boolean;
//   disabled?: boolean;
//   variant: TagVariants;
//   onClose?: () => void;
//   PrefixIcon?: FC<SVGProps>;
// }

import { StylinComponentProps } from '@stylin.js/react';
import { ButtonHTMLAttributes, FC } from 'react';

import { SVGProps } from '../../icons/icons.types';
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
  PrefixIcon?: FC<SVGProps>;
  variant: TagVariants;
}
