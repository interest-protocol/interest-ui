import { FC } from 'react';

import { SVGProps } from '../../icons/icons.types';

type TagVariants = 'filled' | 'outline';
type TagSizes = 'small' | 'medium' | 'large';

export interface TagProps {
  size: TagSizes;
  label: string;
  dismiss?: boolean;
  disabled?: boolean;
  variant: TagVariants;
  onClose?: () => void;
  PrefixIcon?: FC<SVGProps>;
}
