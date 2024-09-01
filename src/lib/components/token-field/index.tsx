import stylin from '@stylin.js/react';
import {
  ChangeEvent,
  FC,
  FocusEvent,
  forwardRef,
  PropsWithRef,
  RefAttributes,
  startTransition,
  useId,
  useState,
} from 'react';
import React from 'react';

import { Button, Theme, useTheme } from '../../';
import { Box, Typography } from '../../elements';
import { TokenFieldElementProps, TokenFieldProps } from './token-field.types';

const TokenFieldElement = stylin<
  TokenFieldElementProps & RefAttributes<unknown>
>('input')();

export const TokenField: FC<PropsWithRef<TokenFieldProps>> = forwardRef(
  (
    {
      onBlur,
      status,
      active,
      Bottom,
      balance,
      onFocus,
      variant,
      activeBg,
      disabled,
      TokenIcon,
      tokenName,
      handleMax,
      fieldProps,
      onActivate,
      ...props
    },
    ref
  ) => {
    const id = useId();
    const { colors } = useTheme() as Theme;
    const [focus, setFocus] = useState<boolean>(false);
    const [value, setValue] = useState<string>();

    const statusColor = focus || status === 'none' ? 'onSurface' : 'status';

    const handleBorderStatus = () => {
      const isFocused = focus && !disabled;
      const isError = status === 'error';
      const isSuccess = status === 'success';
      const hasStatus = isError || isSuccess;
      if (disabled) return '1px solid ' + colors.outlineVariant;
      if (isFocused) return '2px solid ' + colors.primary;
      if (hasStatus)
        return '1px solid ' + colors[status as 'error' | 'success'];
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
      if (!focus) startTransition(() => setFocus(true));

      onFocus?.(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
      if (focus) startTransition(() => setFocus(false));

      onBlur?.(e);
    };

    const changeValue = (input: string) => setValue(input);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
      changeValue(e.target.value);

    return (
      <Box
        opacity={disabled ? 0.32 : 1}
        cursor={disabled ? 'not-allowed' : 'default'}
        aria-label="tokenFieldHolder"
      >
        <Box
          display="flex"
          borderRadius="s"
          alignItems="center"
          py={TokenIcon ? '0' : 'xs'}
          transition="all 300ms ease-in-out"
          bg={variant === 'outline' ? 'transparent' : 'container'}
          border={
            handleBorderStatus() ||
            '1px solid ' +
              colors[variant === 'outline' ? 'outlineVariant' : 'primary']
          }
          {...fieldProps}
          {...(onActivate &&
            !active && {
              onClick: onActivate,
            })}
        >
          <Box
            p="xs"
            display="flex"
            color="onSurface"
            alignItems="center"
            justifyContent="center"
          >
            <Box display="flex" alignItems="center">
              {TokenIcon}
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
            justifyItems="center"
            p={TokenIcon ? '2xs' : 'xs'}
            mr={status ? '0.5rem' : 'unset'}
          >
            <TokenFieldElement
              id={id}
              ref={ref}
              all="unset"
              type="text"
              width="100%"
              fontSize="2xl"
              lineHeight="l"
              fontWeight="500"
              autoFocus={focus}
              color={statusColor}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={handleChange}
              disabled={disabled || !active}
              defaultValue={value || props.defaultValue}
              nPlaceholder={{
                color: '#6F6F73',
              }}
              {...(onActivate &&
                !active && {
                  pointerEvents: 'none',
                })}
              {...props}
            />
            {Bottom}
          </Box>
          {onActivate && (
            <Box
              mx="m"
              display="flex"
              width="1.5rem"
              height="1.5rem"
              cursor="pointer"
              borderRadius="full"
              alignItems="center"
              justifyContent="center"
              bg={active ? activeBg : 'white'}
            >
              <Box
                borderRadius="full"
                bg="lowestContainer"
                width={active ? '0.75rem' : '0.25rem'}
                height={active ? '0.75rem' : '1.25rem'}
              />
            </Box>
          )}
        </Box>
        {active && balance && (
          <Box
            my="xs"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              pt="2xs"
              size="large"
              variant="label"
              fontSize="0.75rem"
              color={disabled ? 'onSurface' : statusColor}
            >
              Balance: {balance}
            </Typography>
            {handleMax && (
              <Button
                px="xs"
                py="2xs"
                fontSize="xs"
                variant="outline"
                borderRadius="2xs"
                onClick={handleMax}
              >
                MAX
              </Button>
            )}
          </Box>
        )}
      </Box>
    );
  }
);

TokenField.displayName = 'TokenField';
export * from './token-field.types';
