import stylin from '@stylin.js/react';
import React, {
  ChangeEvent,
  FC,
  FocusEvent,
  forwardRef,
  PropsWithRef,
  RefAttributes,
  startTransition,
  useCallback,
  useId,
  useRef,
  useState,
} from 'react';

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
      Label,
      isNotDefaultLabel,
      onBlur,
      status,
      onFocus,
      handleMax,
      variant,
      disabled,
      TokenIcon,
      fieldProps,
      tokenName,
      labelPosition,
      supportingText,
      ...props
    },
    ref
  ) => {
    const { colors } = useTheme() as Theme;
    const [focus, setFocus] = useState(false);
    const valueRef = useRef<string>();
    const id = useId();

    const statusColor = focus || status === 'none' ? 'onSurface' : status;

    const handleBorderStatus = () => {
      const isFocused = focus && !disabled;
      const isError = status === 'error';
      const isSuccess = status === 'success';
      const hasStatus = isError || isSuccess;
      if (disabled) return '1px solid ' + colors.outlineVariant;
      if (isFocused) return '3px solid ' + colors.primary;
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

    const handleChange = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        valueRef.current = e.target.value;
      },
      [valueRef.current]
    );

    return (
      <Box
        aria-label="tokenFieldHolder"
        opacity={disabled ? 0.32 : 1}
        cursor={disabled ? 'not-allowed' : 'auto'}
      >
        {Label && (
          <LabelElement htmlFor={id}>
            {!isNotDefaultLabel ? (
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
                {Label}
              </Typography>
            ) : (
              Label
            )}
          </LabelElement>
        )}
        <Box
          display="flex"
          borderRadius="xs"
          alignItems="center"
          py={TokenIcon ? '0' : 'xs'}
          bg={variant === 'outline' ? 'transparent' : 'container'}
          border={
            handleBorderStatus() ||
            '1px solid ' +
              colors[variant === 'outline' ? 'outlineVariant' : 'container']
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
            justifyContent="center"
            p={TokenIcon ? 'xs' : 'm'}
            mr={status ? '0.5rem' : 'unset'}
          >
            <TokenFieldElement
              ref={ref}
              id={id}
              all="unset"
              type="text"
              width="100%"
              fontSize="2xl"
              lineHeight="l"
              fontWeight="500"
              disabled={disabled}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={handleChange}
              color={statusColor}
              defaultValue={valueRef.current || props.defaultValue}
              nPlaceholder={{
                color: '#6F6F73',
              }}
              {...props}
            />
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button
              variant="text"
              color="primary"
              onClick={handleMax}
              disabled={disabled}
            >
              MAX
            </Button>
          </Box>
        </Box>
        {supportingText && (
          <Box
            pt="2xs"
            fontSize="0.75rem"
            color={disabled ? 'onSurface' : statusColor}
          >
            {supportingText}
          </Box>
        )}
      </Box>
    );
  }
);

TokenField.displayName = 'TokenField';
export * from './token-field.types';
