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

import { Button, LabelElementProps, Theme, useTheme } from '../..';
import { Box, Typography } from '../../elements';
import { TokenFieldElementProps, TokenFieldProps } from './token-field.types';

const TokenFieldElement = stylin<
  TokenFieldElementProps & RefAttributes<unknown>
>('input')();
const LabelElement = stylin<LabelElementProps>('label')();

export const TokenField: FC<PropsWithRef<TokenFieldProps>> = forwardRef(
  (
    {
      label,
      tokenName,
      onBlur,
      status,
      onFocus,
      TokenIcon,
      fieldProps,
      disabled,
      supportingText,
      labelPosition,
      variant,
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
          <Typography
            mb="xs"
            variant="body"
            color="onSurface"
            textAlign={labelPosition}
            size={labelPosition === 'right' ? 'medium' : 'small'}
            textTransform={
              labelPosition === 'right' ? 'uppercase' : 'capitalize'
            }
          >
            {label}
          </Typography>
        </LabelElement>
        <Box
          display="flex"
          borderRadius="xs"
          alignItems="center"
          py={TokenIcon ? '0' : 'xs'}
          bg={variant === 'outline' ? 'transparent' : 'container'}
          border={
            variant !== 'outline'
              ? 'none'
              : focus
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
          <Box
            p="xs"
            display="flex"
            color="onSurface"
            alignItems="center"
            justifyContent="center"
          >
            <Box display="flex" alignItems="center">
              {TokenIcon && (
                <TokenIcon maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />
              )}
              <Typography variant="body" ml="l" size="large">
                {tokenName}
              </Typography>
            </Box>
          </Box>
          <Box
            flex="1"
            width="100%"
            height="2.5rem"
            display="flex"
            alignItems="stretch"
            flexDirection="column"
            justifyContent="center"
            p={TokenIcon ? 'xs' : 'm'}
            mr={status ? '0.5rem' : 'unset'}
          >
            <TokenFieldElement
              ref={ref}
              id={label}
              all="unset"
              type="text"
              width="100%"
              fontSize="2xl"
              lineHeight="l"
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
                color: '#6F6F73',
              }}
              {...props}
            />
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button variant="text" color="primary">
              MAX
            </Button>
          </Box>
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

TokenField.displayName = 'TokenField';
export * from './token-field.types';
