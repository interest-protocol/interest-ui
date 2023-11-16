import stylin from '@stylin.js/react';
import { not } from 'ramda';
import React, { FC, MouseEventHandler, useState } from 'react';

import { Box, Motion } from '../../elements';
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
}) => {
  const [toggle, setToggle] = useState<boolean>(defaultValue);
  const { colors } = useTheme() as Theme;

  const handleClick: MouseEventHandler<HTMLInputElement> = () => {
    onClick?.();
    setToggle(not);
  };

  return (
    <Box display="flex" gap="m" alignItems="center">
      <Box position="relative" width="1.125rem" height="1.125rem">
        <CheckedButtonElement
          id={label}
          name={name}
          type="checkbox"
          cursor="pointer"
          width="1.125rem"
          borderRadius="s"
          height="1.125rem"
          appearance="none"
          border="1px solid"
          nHover={{
            boxShadow: '0 0 .1875rem .3125rem' + colors['onPrimary'] + '1F',
            transition: 'all 300ms ease-in-out',
          }}
          onClick={handleClick}
          bg={toggle ? colors.primary : 'transparent'}
          borderColor={toggle ? colors.primary : 'onSurface'}
        />
        <LabelElement
          top="50%"
          left="50%"
          htmlFor={label}
          position="absolute"
          transform="translate(-50%, -43%)"
          color={colors['onPrimary']}
        >
          <Motion
            initial="hidden"
            variants={iconVariants}
            animate={toggle ? 'visible' : 'hidden'}
          >
            <Checkmark width="100%" maxWidth="1.5rem" maxHeight="1.5rem" />
          </Motion>
        </LabelElement>
      </Box>
      <LabelElement htmlFor={label} color="onSurface">
        {label}
      </LabelElement>
    </Box>
  );
};

export * from './checkbox.types';
