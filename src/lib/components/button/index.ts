import stylin, { variant } from '@stylin.js/react';
import { FC, PropsWithChildren } from 'react';

import { ButtonElementProps, ButtonProps } from './button.types';

export const Button: FC<PropsWithChildren<ButtonProps>> =
  stylin<ButtonElementProps>('button')(
    variant({
      scale: 'buttonVariants',
      property: 'variant',
    }),
    variant({
      scale: 'buttonSizes',
      property: 'size',
    })
  );

export * from './button.types';
