import stylin from '@stylin.js/react';
import { useMotionValue, useSpring } from 'framer-motion';
import { isEmpty, not } from 'ramda';
import React, {
  ChangeEventHandler,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import { Box, Motion } from '../../elements';
import { CheckSVG, TimesSVG } from '../../icons';
import { Theme, useTheme } from '../../theme';
import {
  CheckedButtonElementProps,
  CheckedButtonProps,
  LabelElementProps,
} from './switch.types';
import { getLabel } from './switch.utils';

const CheckedButtonElement = stylin<CheckedButtonElementProps>('input')();
const LabelElement = stylin<LabelElementProps>('label')();

const WIDTH = {
  small: '3.25rem',
  medium: '2.6rem',
};

const HEIGHT = {
  small: '2rem',
  medium: '1.7rem',
};

const TRANSLATE_X = {
  small: ['0.3rem', '1.4rem'],
  medium: ['0.3rem', '1.15rem'],
};

export const SwitchButton: FC<PropsWithChildren<CheckedButtonProps>> = ({
  labels,
  onChange,
  disabled,
  defaultValue,
  size = 'small',
  special,
  hasIcon,
  ...props
}) => {
  const theme = useTheme() as Theme;
  const [switcher, setSwitcher] = useState(defaultValue || false);
  const ative = useMotionValue(TRANSLATE_X[size][Number(switcher)]);
  const translateX = useSpring(ative, { stiffness: 1000, damping: 100 });

  useEffect(() => {
    translateX.set(TRANSLATE_X[size][Number(switcher)]);
  }, [switcher]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    onChange?.(event);
    setSwitcher(not);
  };

  return (
    <Box
      fontSize="s"
      display="flex"
      flexWrap="wrap"
      fontWeight="300"
      color="onSurface"
      alignItems="center"
      textTransform="capitalize"
    >
      {labels && !isEmpty(labels) && getLabel(labels, switcher)}
      <LabelElement ml="0.375rem" display="flex" position="relative">
        <CheckedButtonElement
          display="none"
          type="checkbox"
          checked={switcher}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <Box
          display="flex"
          alignItems="center"
          border={special ? 'none' : switcher ? 'none' : '2px solid'}
          borderColor="outline"
          borderRadius="full"
          width={WIDTH[size]}
          height={HEIGHT[size]}
          bg={
            disabled
              ? `${theme.colors['surface.opacity']}1F`
              : special
              ? 'primary'
              : switcher
              ? 'primary'
              : 'surface.containerHighest'
          }
          transition="background 300ms ease-in-out"
          cursor={disabled ? 'not-allowed' : 'pointer'}
        >
          <Motion
            borderRadius="50%"
            width={switcher ? '1.5rem' : '1rem'}
            height={switcher ? '1.5rem' : '1rem'}
            style={{ translateX }}
            bg={
              disabled
                ? 'onSurface'
                : special
                ? 'primary.onPrimary'
                : switcher
                ? 'primary.onPrimary'
                : 'outline'
            }
            nHover={{
              bg: disabled
                ? 'onSurface'
                : special
                ? 'primary.onPrimary'
                : switcher
                ? 'primary.primaryContainer'
                : 'outline',
            }}
            nActive={
              disabled
                ? {}
                : {
                    width: '1.75rem',
                    height: '1.75rem',
                    bg: special
                      ? 'primary.onPrimary'
                      : switcher
                      ? 'primary.primaryContainer'
                      : 'surface.surfaceVariant',
                  }
            }
            display="flex"
            alignItems="center"
            justifyContent="center"
            color={
              disabled
                ? theme.dark
                  ? 'surface.surfaceVariant'
                  : 'onSurface'
                : switcher
                ? 'primary.onPrimaryContainer'
                : theme.dark
                ? 'surface.containerHigh'
                : 'primary.onPrimary'
            }
          >
            {hasIcon &&
              (switcher ? (
                <CheckSVG maxWidth="0.733rem" maxHeight="0.559rem" />
              ) : (
                <TimesSVG maxWidth="0.733rem" maxHeight="0.559rem" />
              ))}
          </Motion>
        </Box>
      </LabelElement>
    </Box>
  );
};
