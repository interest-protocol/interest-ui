import stylin from '@stylin.js/react';
import React, { FC, MouseEventHandler, useState } from 'react';

import { Box, Motion, Typography } from '../../elements';
import { Theme, useTheme } from '../../theme';
import {
  CheckedButtonElementProps,
  LabelElementProps,
} from '../toggle/toggle.types';
import { CheckboxProps } from './checkbox.types';
import Checkmark from './checkmark';

const CheckedButtonElement = stylin<CheckedButtonElementProps>('input')();
const LabelElement = stylin<LabelElementProps>('label')();

const iconVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
};

export const Checkbox: FC<CheckboxProps> = ({
  label,
  onClick,
  defaultValue,
  name,
  disabled,
  supportingText,
  allowIndetermatedValue,
}) => {
  const [currentValue, setCurrentValue] = useState<number>(+defaultValue);
  const { colors } = useTheme() as Theme;

  const handleClick: MouseEventHandler<HTMLInputElement> = () => {
    if (disabled) return;

    onClick?.();
    setCurrentValue(
      currentValue == 1
        ? allowIndetermatedValue
          ? -1
          : 0
        : currentValue == -1
        ? 0
        : 1
    );
  };

  return (
    <Box
      gap="l"
      display="flex"
      alignItems="center"
      cursor={disabled ? 'not-allowed' : 'pointer'}
    >
      <Box
        transition="all 300ms ease-in-out"
        nHover={{
          p: disabled ? 'unset' : '0.675rem',
          bg: disabled
            ? 'unset'
            : currentValue == 0
            ? '#00000014'
            : `${colors.primary}14`,
        }}
        borderRadius="full"
      />
      <Box position="relative" width="1.125rem" height="1.125rem">
        <CheckedButtonElement
          id={label}
          name={name}
          type="checkbox"
          width="1.125rem"
          height="1.125rem"
          appearance="none"
          onClick={handleClick}
          borderRadius="0.25rem"
          border="2px solid"
          cursor={disabled ? 'not-allowed' : 'pointer'}
          nHover={{
            boxShadow: '0 0 .1875rem .3125rem' + colors['onPrimary'] + '1F',
            transition: 'all 300ms ease-in-out',
          }}
          bg={
            currentValue != 0
              ? disabled
                ? '#0000003d'
                : colors.primary
              : 'transparent'
          }
          borderColor={
            currentValue != 0
              ? disabled
                ? 'transparent'
                : colors.primary
              : disabled
              ? '#0000003d'
              : 'onSurface'
          }
        />
        <LabelElement
          top="43%"
          left="50%"
          htmlFor={label}
          position="absolute"
          transform="translate(-50%, -43%)"
          cursor={disabled ? 'not-allowed' : 'pointer'}
          color={colors['onPrimary']}
        >
          <Motion
            initial="hidden"
            variants={iconVariants}
            animate={currentValue != 0 ? 'visible' : 'hidden'}
            height="1rem"
          >
            <Checkmark
              width="100%"
              maxWidth="1rem"
              maxHeight="1rem"
              isIndeterminated={allowIndetermatedValue && currentValue == -1}
            />
          </Motion>
        </LabelElement>
        <Box
          bg="transparent"
          nHover={{
            bg: disabled
              ? 'unset'
              : currentValue == 0
              ? '#00000014'
              : `${colors.primary}14`,
          }}
          nFocus={{
            bg: disabled
              ? 'unset'
              : currentValue == 0
              ? '#00000029'
              : `${colors.primary}29`,
          }}
          top="-0.45rem"
          left="-0.45rem"
          width="2rem"
          height="2rem"
          position="absolute"
          borderRadius="full"
          onClick={handleClick}
          transition="all 300ms ease-in-out"
        />
      </Box>
      <LabelElement
        htmlFor={label}
        color="onSurface"
        cursor={disabled ? 'not-allowed' : 'pointer'}
      >
        <Box>
          <Typography variant="body" size="large">
            {label}
          </Typography>
          {supportingText && (
            <Typography variant="body" size="small">
              {supportingText}
            </Typography>
          )}
        </Box>
      </LabelElement>
    </Box>
  );
};

export * from './checkbox.types';
