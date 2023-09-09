import { useTheme } from '@emotion/react';
import { not } from 'ramda';
import React, { FC, useMemo, useState } from 'react';

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
  const [variant, setVariant] = useState<'hover' | 'withoutHover'>(
    'withoutHover'
  );

  const RadioCircleColor = useMemo(
    () => colors[selected ? 'primary' : 'onSurface'],
    [selected]
  );

  const variants = {
    hover: {
      boxShadow: `${
        disabled ? 'disabled' : `${RadioCircleColor}14`
      } 0px 0px 0px 0.625rem`,
    },
    withoutHover: { boxShadow: 'unset' },
  };

  const handleChange = () => {
    if (disabled) return;
    setSelected(not);
    onClick?.();
  };

  return (
    <Box
      gap="1rem"
      display="flex"
      flexWrap="wrap"
      onClick={handleChange}
      cursor={disabled ? 'not-allowed' : 'pointer'}
    >
      <Motion
        display="flex"
        width="1.25rem"
        height="1.25rem"
        animate={variant}
        borderRadius="50%"
        alignItems="center"
        variants={variants}
        justifyContent="center"
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setVariant('hover')}
        onMouseLeave={() => setVariant('withoutHover')}
        color={disabled ? 'onSurface' : RadioCircleColor}
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
