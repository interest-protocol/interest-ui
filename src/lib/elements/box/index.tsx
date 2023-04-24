import stylin, { variant } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BoxElementProps, BoxProps } from '../box/box.types';

export const Box = forwardRef(
  ({ as, ...props }: PropsWithChildren<BoxProps>, ref) => {
    const BoxElement = stylin<BoxElementProps & RefAttributes<unknown>>(
      as || 'div'
    )(
      variant({
        scale: 'boxes',
        property: 'variant',
      }),
      variant({
        scale: 'surface',
        property: 'surface',
      })
    );

    return <BoxElement {...props} ref={ref} />;
  }
);

Box.displayName = 'Box';
export * from '../box/box.types';
