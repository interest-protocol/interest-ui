import stylin, { variant } from '@stylin.js/react';
import React, {
  FC,
  forwardRef,
  PropsWithChildren,
  PropsWithRef,
  RefAttributes,
} from 'react';

import { TypographyElementProps, TypographyProps } from './typography.types';
import { getSizeStyle } from './typography.utils';

export const Typography: FC<PropsWithRef<PropsWithChildren<TypographyProps>>> =
  forwardRef(({ as, variant: externalVariant, size, ...props }, ref) => {
    const TypographyElement = stylin<
      TypographyElementProps & RefAttributes<unknown>
    >(as || 'p')(
      variant({
        scale: 'typography',
        property: 'variant',
      })
    );

    return (
      <TypographyElement
        variant={externalVariant}
        {...getSizeStyle(externalVariant, size)}
        {...props}
        ref={ref}
      />
    );
  });

Typography.displayName = 'Typography';
export * from './typography.types';
