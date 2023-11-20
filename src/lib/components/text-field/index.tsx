import stylin from '@stylin.js/react';
import {
  ChangeEvent,
  FC,
  FocusEvent,
  forwardRef,
  PropsWithRef,
  RefAttributes,
  useState,
} from 'react';
import React from 'react';

import { LabelElementProps, Theme, useTheme } from '../..';
import { Box, Typography } from '../../elements';
import { TextFieldElementProps, TextFieldProps } from './text-field.types';

const TextFieldElement = stylin<TextFieldElementProps & RefAttributes<unknown>>(
  'input'
)();
const LabelElement = stylin<LabelElementProps>('label')();

export const TextField: FC<PropsWithRef<TextFieldProps>> = forwardRef(
  (
    {
      suffix,
      Prefix,
      label,
      onBlur,
      status,
      onFocus,
      disabled,
      fieldProps,
      supportingText,
      ...props
    },
    ref
  ) => {
    const { colors } = useTheme() as Theme;
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState<string>();

    const statusColor = focus
      ? 'onSurface'
      : status === 'none'
      ? 'onSurface'
      : status;
    const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
      if (!focus) setFocus(true);

      onFocus?.(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
      if (focus) setFocus(false);

      onBlur?.(e);
    };

    const changeValue = (input: string) => setValue(input);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
      changeValue(e.target.value);

    return (
      <Box
        opacity={disabled ? 0.32 : 1}
        cursor={disabled ? 'not-allowed' : 'normal'}
      >
        <LabelElement htmlFor={label}>
          <Typography variant="body" size="small" mb="2xs" color="onSurface">
            {label}
          </Typography>
        </LabelElement>
        <Box
          display="flex"
          borderRadius="full"
          alignItems="center"
          border={
            focus
              ? '3px solid ' + colors.primary
              : status === 'error'
              ? '1px solid ' + colors.error
              : status === 'success'
              ? '1px solid ' + colors.success
              : '1px solid ' + colors.outlineVariant
          }
          nHover={{
            borderWidth: focus ? '3px' : disabled ? '1px' : '2px',
            borderStyle: 'solid',
            borderColor: !disabled ? colors.primary : colors.outlineVariant,
          }}
          transition="all 300ms ease-in-out"
          {...fieldProps}
        >
          {Prefix && (
            <Box
              p="m"
              display="flex"
              color="onSurface"
              alignItems="center"
              justifyContent="center"
            >
              {Prefix}
            </Box>
          )}
          <Box
            p={Prefix ? 'xs' : 'm'}
            flex="1"
            width="100%"
            height="2.5rem"
            display="flex"
            alignItems="stretch"
            flexDirection="column"
            justifyContent="center"
            mr={status ? '0.5rem' : 'unset'}
          >
            <TextFieldElement
              ref={ref}
              id={label}
              all="unset"
              type="text"
              width="100%"
              fontSize="m"
              lineHeight="m"
              fontWeight="500"
              disabled={disabled}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={focus}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={handleChange}
              color={statusColor}
              defaultValue={value || props.defaultValue}
              nPlaceholder={{
                color: 'onSurface',
              }}
              {...props}
            />
          </Box>
          {suffix && (
            <Box
              p="m"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {suffix}
            </Box>
          )}
        </Box>
        {supportingText && (
          <Box pt="2xs" fontSize="0.75rem" color={statusColor}>
            {supportingText}
          </Box>
        )}
      </Box>
    );
  }
);

TextField.displayName = 'TextField';
export * from './text-field.types';
