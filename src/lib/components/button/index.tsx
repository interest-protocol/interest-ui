import stylin, { variant } from '@stylin.js/react';
import React, { FC, PropsWithChildren, RefAttributes } from 'react';

import { ButtonElementProps, ButtonProps } from './button.types';

export const Button: FC<PropsWithChildren<ButtonProps>> = (props) => {
  const ButtonElement = stylin<ButtonElementProps & RefAttributes<unknown>>(
    'button'
  )(
    variant({
      scale: 'buttonVariants',
      property: 'variant',
    }),
    variant({
      scale: 'buttonSizes',
      property: 'size',
    })
  );

  return <ButtonElement {...props} />;
};

// Button.displayName = 'Button';
export * from './button.types';
