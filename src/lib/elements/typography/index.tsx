import stylin, { variant } from '@stylin.js/react';
import React, {
  FC,
  forwardRef,
  PropsWithChildren,
  PropsWithRef,
  RefAttributes,
} from 'react';

import { TypographyElementProps, TypographyProps } from './typography.types';

export const Typography: FC<PropsWithRef<PropsWithChildren<TypographyProps>>> =
  forwardRef(({ as, ...props }, ref) => {
    const TypographyElement = stylin<
      TypographyElementProps & RefAttributes<unknown>
    >(as || 'p')(
      variant({
        scale: 'typography',
        property: 'variant',
      })
    );

    return <TypographyElement {...props} ref={ref} />;
  });

Typography.displayName = 'Typography';
export * from './typography.types';
