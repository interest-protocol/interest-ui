import { useTheme } from '@emotion/react';
import { not } from 'ramda';
import React, { FC, useState } from 'react';

import { Box, Motion } from '../../elements';
import { RadioCircleSVG } from '../../icons';
import { Theme } from '../../theme';
import { RadioButtonProps } from './radio-button.types';

export const RadioButton: FC<RadioButtonProps> = ({
  onClick,
  disabled,
  defaultValue,
}) => {
  const { colors } = useTheme() as Theme;
  const [selected, setSelected] = useState(defaultValue ?? false);

  const color = colors[selected ? 'primary' : 'onSurface'];

  const variants = {
    hover: {
      boxShadow: `${disabled ? 'disabled' : `${color}14`} 0px 0px 0px 0.625rem`,
    },
    withoutHover: { boxShadow: 'unset' },
  };

  const handleChange = () => {
    if (disabled) return;
    setSelected(not);
    onClick?.(not(selected));
  };

  return (
    <Box
      gap="1rem"
      display="flex"
      flexWrap="wrap"
      onClick={handleChange}
      cursor={disabled ? 'not-allowed' : 'pointer'}
      // eslint-disable-next-line jsx-a11y/aria-role
      role="radioContainer"
    >
      <Motion
        display="flex"
        width="1.25rem"
        height="1.25rem"
        whileHover="hover"
        borderRadius="50%"
        alignItems="center"
        variants={variants}
        initial="withoutHover"
        justifyContent="center"
        transition={{ duration: 0.5 }}
        color={disabled ? 'onSurface' : color}
        opacity={disabled ? '0.32' : '1'}
        role="radio"
      >
        <RadioCircleSVG
          width="100%"
          height="100%"
          maxWidth="1.25rem"
          maxHeight="1.25rem"
          isChecked={selected}
        />
      </Motion>
    </Box>
  );
};

export * from './radio-button.types';
