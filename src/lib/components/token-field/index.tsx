import { useTheme } from '@emotion/react';
import stylin from '@stylin.js/react';
import React, {
  ChangeEvent,
  FC,
  FocusEvent,
  forwardRef,
  PropsWithRef,
  RefAttributes,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from 'react';

import { Box, Motion, Typography } from '../../elements';
import { Theme } from '../../theme';
import { Button } from '../button';
import { TokenFieldElementProps, TokenFieldProps } from './token-field.types';

const TokenFieldElement = stylin<
  TokenFieldElementProps & RefAttributes<unknown>
>('input')();

export const TokenField: FC<PropsWithRef<TokenFieldProps>> = forwardRef(
  (
    {
      error,
      valid,
      onBlur,
      onFocus,
      disabled,
      topLabel,
      outlined,
      fieldProps,
      TokenIcon,
      TokenName,
      supportingText,
      topLabelAlignment,
      ...props
    },
    ref
  ) => {
    const { colors } = useTheme() as Theme;
    const [focus, setFocus] = useState(false);
    const [, startTransition] = useTransition();
    const [value, setValue] = useState<string>();
    const [variant, setVariant] = useState('normal');
    const [lastVariant, setLastVariant] = useState('normal');

    const handleFocus = (e: FocusEvent<HTMLInputElement, Element>) => {
      if (!focus) startTransition(() => setFocus(true));

      onFocus?.(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
      if (focus) startTransition(() => setFocus(false));

      onBlur?.(e);
    };

    const changeValue = (input: string) =>
      startTransition(() => setValue(input));

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
      changeValue(e.target.value);

    useEffect(() => {
      if (variant !== lastVariant) setLastVariant(variant ?? 'normal');

      if (focus) {
        setVariant('focus');
        return;
      }

      if (error) {
        setVariant('error');
        return;
      }

      if (value || valid) {
        setVariant('valid');
        return;
      }

      setVariant('normal');
    }, [focus, value]);

    const wrapperVariants = {
      focus: {
        borderWidth: '3px',
        borderColor: colors.primary,
      },
      normal: {
        borderWidth: outlined ? '1px' : '0px',
        borderColor: outlined ? colors.outlineVariant : 'transparent',
        backgroundColor: outlined ? 'transparent' : colors.container,
      },
      valid: {
        borderWidth: valid ? '1px' : '2px',
        borderColor: valid ? colors.success : colors.warning,
      },
      error: {
        borderWidth: '1px',
        borderColor: colors.error,
      },
    };

    const nHover = {
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: colors.primary,
    };

    const statusColor = useMemo(() => {
      if (variant === 'error') return 'error';

      if (valid && variant === 'valid') return 'success';

      return '';
    }, [valid, error, variant]);

    return (
      <Box
        opacity={disabled ? 0.32 : 1}
        color={statusColor || 'onSurface'}
        cursor={disabled ? 'not-allowed' : 'normal'}
      >
        <Typography
          mb="xs"
          variant="body"
          color="onSurface"
          textAlign={topLabelAlignment}
          size={topLabelAlignment === 'right' ? 'medium' : 'small'}
          textTransform={
            topLabelAlignment === 'right' ? 'uppercase' : 'capitalize'
          }
        >
          {topLabel}
        </Typography>
        <Motion
          p="xs"
          display="flex"
          animate={variant}
          borderRadius="xs"
          alignItems="center"
          borderStyle="solid"
          initial={lastVariant}
          variants={wrapperVariants}
          transition={{ duration: 0.3 }}
          whileHover={disabled ? '' : nHover}
          {...fieldProps}
        >
          <Box
            px="xs"
            display="flex"
            color="onSurface"
            alignItems="center"
            justifyContent="center"
          >
            <Box display="flex" gap="l" alignItems="center">
              {TokenIcon && (
                <TokenIcon maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />
              )}
              <Typography variant="body" size="large">
                {TokenName}
              </Typography>
            </Box>
          </Box>
          <Box
            m="xs"
            flex="1"
            width="100%"
            display="flex"
            alignItems="stretch"
            flexDirection="column"
            justifyContent="center"
          >
            <TokenFieldElement
              ref={ref}
              all="unset"
              type="text"
              width="100%"
              fontSize="2xl"
              lineHeight="l"
              autoFocus={focus}
              onBlur={handleBlur}
              disabled={disabled}
              onFocus={handleFocus}
              onChange={handleChange}
              color={statusColor || 'onSurface'}
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
        </Motion>
        {statusColor ? (
          <Typography variant="body" mt="xs" size="small">
            {error || valid}
          </Typography>
        ) : (
          <Typography variant="body" mt="xs" size="small">
            {supportingText}
          </Typography>
        )}
      </Box>
    );
  }
);

export * from './token-field.types';
