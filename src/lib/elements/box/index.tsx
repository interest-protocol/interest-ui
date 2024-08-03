import stylin, { variant } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BoxElementProps, BoxProps } from '../box/box.types';

export const Box = forwardRef<HTMLElement, PropsWithChildren<BoxProps>>(
  ({ as, ...props }, ref) => {
    const BoxElement = stylin<BoxElementProps & RefAttributes<HTMLElement>>(
      as || 'div'
    )(
      variant({
        scale: 'boxes',
        property: 'variant',
      })
    );

    return <BoxElement {...props} ref={ref} />;
  }
);

Box.displayName = 'Box';
export * from '../box/box.types';
