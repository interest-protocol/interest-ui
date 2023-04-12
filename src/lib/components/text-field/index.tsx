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
    { onFocus, onBlur, PrefixIcon, SuffixIcon, error, valid, ...props },
    ref
  ) => {
    const theme = useTheme() as Theme;
    const [lastVariant, setLastVariant] = useState('normal');
    const [variant, setVariant] = useState('normal');
    const [focus, setFocus] = useState(false);
    const [, startTransition] = useTransition();
    const [value, setValue] = useState<string>();

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

    const wrapperVariants = useMemo(
      () => ({
        normal: {
          borderWidth: '1px',
          borderColor: theme.colors.textPlaceholder,
        },
        focus: {
          borderWidth: '1px',
          borderColor: theme.colors.accent,
        },
        valid: {
          borderWidth: valid ? '1px' : '2px',
          borderColor: valid ? theme.colors.success : theme.colors.accent,
        },
        error: {
          borderWidth: '1px',
          borderColor: theme.colors.error,
        },
      }),
      [theme, valid]
    );

    const statusColor = useMemo(() => {
      if (variant === 'error') return 'error';

      if (valid && variant === 'valid') return 'success';

      return '';
    }, [valid, error, variant]);

    return (
      <Box color={statusColor || 'text'}>
        <Motion
          p="l"
          display="flex"
          borderRadius="m"
          animate={variant}
          borderStyle="solid"
          alignItems="center"
          initial={lastVariant}
          variants={wrapperVariants}
          transition={{ duration: 0.3 }}
        >
          {PrefixIcon && (
            <Button variant="icon" mr="s">
              {PrefixIcon}
            </Button>
          )}
          <TextFieldElement
            all="unset"
            my="xs"
            flex="1"
            ref={ref}
            type="text"
            fontSize="xl"
            lineHeight="xl"
            autoFocus={focus}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
            color={statusColor || 'text'}
            defaultValue={value || props.defaultValue}
            nPlaceholder={{
              color: 'textPlaceholder',
            }}
            {...props}
          />
          {(variant == 'error' && (
            <ErrorSVG
              maxWidth="1.25rem"
              maxHeight="1.25rem"
              width="100%"
              height="100%"
            />
          )) ||
            (valid && variant == 'valid' && (
              <TickSVG
                maxWidth="1.25rem"
                maxHeight="1.25rem"
                width="100%"
                height="100%"
              />
            )) ||
            SuffixIcon}
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