import stylin, { variant as stylinVariant } from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { TypographyElementProps, TypographyProps } from './typography.types';
import { getSizeStyle } from './typography.utils';

export const Typography = forwardRef<
  TypographyElementProps,
  PropsWithChildren<TypographyProps>
>(({ as, variant, size, ...props }, ref) => {
  const TypographyElement = stylin<
    TypographyElementProps & RefAttributes<unknown>
  >(as || 'p')(
    stylinVariant({
      scale: 'typography',
      property: 'variant',
    })
  );

  return (
    <TypographyElement
      variant={variant}
      {...getSizeStyle(variant, size)}
      {...props}
      ref={ref}
    />
  );
});

Typography.displayName = 'Typography';
export * from './typography.types';
