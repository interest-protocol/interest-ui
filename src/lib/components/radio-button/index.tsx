import { useTheme } from '@emotion/react';
import stylin from '@stylin.js/react';
import React, { FC, PropsWithChildren, useState } from 'react';

import { Box } from '../../elements';
import { RadioCircleSVG } from '../../icons';
import { Theme } from '../../theme';
import {
  RadioButtonElementProps,
  RadioButtonProps,
} from './radio-button.types';

export const RadioButton: FC<PropsWithChildren<RadioButtonProps>> = ({
  ...props
}) => {
  const { dark } = useTheme() as Theme;
  const [selector, setSelector] = useState(props.checked || false);
  const RadioButtonElement = stylin<RadioButtonElementProps>('input')();
  return (
    <Box display="flex" gap="1rem" flexWrap="wrap">
      <RadioButtonElement
        {...props}
        type="radio"
        display="none"
        checked={selector}
      />
      <Box
        width="2.5rem"
        height="2.5rem"
        color={
          props.disabled
            ? 'disabled'
            : selector
            ? 'accent'
            : dark
            ? 'disabled'
            : 'textPlaceholder'
        }
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="50%"
        transition="background-color .5s"
        nHover={{
          bg: props.disabled
            ? 'unset'
            : selector
            ? dark
              ? '#99bbff14'
              : '#0055ff14'
            : dark
            ? '#c8c6ca14'
            : '#47464a14',
        }}
      >
        <RadioCircleSVG
          maxWidth="1.25rem"
          maxHeight="1.25rem"
          width="1.25rem"
          height="1.25rem"
          cursor="pointer"
          isChecked={selector}
          onClick={() => !props.disabled && setSelector(!selector)}
        />
      </Box>
    </Box>
  );
};

export * from './radio-button.types';
