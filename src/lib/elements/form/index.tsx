import stylin from '@stylin.js/react';
import React, {
  FC,
  forwardRef,
  PropsWithChildren,
  PropsWithRef,
  RefAttributes,
} from 'react';

import { FormElementProps, FormProps } from './form.types';

export const Form: FC<PropsWithRef<PropsWithChildren<FormProps>>> = forwardRef(
  ({ as, ...props }, ref) => {
    const FormElement = stylin<FormElementProps & RefAttributes<unknown>>(
      as || 'div'
    )();

    return <FormElement {...props} ref={ref} />;
  }
);

Form.displayName = 'Form';
export * from './form.types';
