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
import { ErrorSVG, TickSVG } from '../../icons';
import { Theme } from '../../theme';
import { Button } from '../button';
import { TextFieldElementProps, TextFieldProps } from './text-field.types';

const TextFieldElement = stylin<TextFieldElementProps & RefAttributes<unknown>>(
  'input'
)();

export const TextField: FC<PropsWithRef<TextFieldProps>> = forwardRef(
  (
    {
      error,
      valid,
      Prefix,
      Suffix,
      onBlur,
      onFocus,
      Bottom,
      Top,
      PrefixIcon,
      SuffixIcon,
      fieldProps,
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
        borderWidth: '1px',
        borderColor: colors.primary,
      },
      normal: {
        borderWidth: '1px',
        borderColor: colors.outline,
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

    const statusColor = useMemo(() => {
      if (variant === 'error') return 'error';

      if (valid && variant === 'valid') return 'success';

      return '';
    }, [valid, error, variant]);

    return (
      <Box color={statusColor || 'onSurface'}>
        <Motion
          p="xs"
          display="flex"
          borderRadius="m"
          animate={variant}
          alignItems="center"
          borderStyle="solid"
          initial={lastVariant}
          variants={wrapperVariants}
          transition={{ duration: 0.3 }}
          {...fieldProps}
        >
          {Prefix}
          {PrefixIcon && (
            <Button variant="icon" mr="s">
              {PrefixIcon}
            </Button>
          )}
          <Box
            m="xs"
            flex="1"
            width="100%"
            display="flex"
            alignItems="stretch"
            flexDirection="column"
            justifyContent="center"
          >
            {Top && (
              <Typography
                variant="small"
                color="onSurface"
                textAlign={props.textAlign}
              >
                {Top}
              </Typography>
            )}
            <TextFieldElement
              ref={ref}
              all="unset"
              type="text"
              width="100%"
              fontSize="xl"
              lineHeight="xl"
              autoFocus={focus}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChange={handleChange}
              color={statusColor || 'onSurface'}
              defaultValue={value || props.defaultValue}
              nPlaceholder={{
                color: 'onSurface',
              }}
              {...props}
            />
            {Bottom && (
              <Typography
                variant="small"
                color="onSurface"
                textAlign={props.textAlign}
              >
                {Bottom}
              </Typography>
            )}
          </Box>
          {(variant == 'error' && (
            <ErrorSVG
              width="100%"
              height="100%"
              maxWidth="1.25rem"
              maxHeight="1.25rem"
            />
          )) ||
            (valid && variant == 'valid' && (
              <TickSVG
                width="100%"
                height="100%"
                maxWidth="1.25rem"
                maxHeight="1.25rem"
              />
            )) ||
            SuffixIcon}
          {Suffix}
        </Motion>
        {statusColor && (
          <Typography variant="small" mt="2xs">
            {error || valid}
          </Typography>
        )}
      </Box>
    );
  }
);

TextField.displayName = 'TextField';
export * from './text-field.types';
