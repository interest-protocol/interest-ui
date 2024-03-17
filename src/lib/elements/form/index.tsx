import stylin from '@stylin.js/react';
import React, { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { FormElementProps, FormProps } from './form.types';

export const Form = forwardRef<PropsWithChildren<FormProps>>((props, ref) => {
  const FormElement = stylin<
    FormElementProps & RefAttributes<PropsWithChildren<FormProps>>
  >('form')();

  return <FormElement {...props} ref={ref} />;
});

Form.displayName = 'Form';
export * from './form.types';
