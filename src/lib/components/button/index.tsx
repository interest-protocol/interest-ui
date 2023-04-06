import stylin, { variant } from '@stylin.js/react';
import React, {
  FC,
  forwardRef,
  PropsWithChildren,
  PropsWithRef,
  RefAttributes,
} from 'react';

import { ButtonElementProps, ButtonProps } from './button.types';

export const Button: FC<PropsWithRef<PropsWithChildren<ButtonProps>>> =
  forwardRef((props, ref) => {
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

    return <ButtonElement {...props} ref={ref} />;
  });

// Button.displayName = 'Button';
export * from './button.types';
