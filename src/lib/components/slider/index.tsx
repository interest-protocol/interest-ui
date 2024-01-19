import { useTheme } from '@emotion/react';
import React, { FC, useState } from 'react';

import { Box } from '../../elements';
import { Theme } from '../../theme';
import { SliderProps } from './slider.types';

const SliderElement: FC<SliderProps> = ({
  min = 0,
  onChange,
  max = 100,
  initial = 0,
  disabled = false,
}) => {
  const { colors } = useTheme() as Theme;
  const [values, setValues] = useState(
    Array.isArray(initial) ? initial : [initial]
  );

  const handleChange = (innerValue: Array<number>) => {
    setValues(innerValue);
    onChange?.(innerValue[0]);
  };

  return (
    <RangeSlider
      className="single-thumb"
      defaultValue={[min, max]}
      thumbsDisabled={[true, false]}
      rangeSlideDisabled={disabled}
      values={values}
      onChange={handleChange}
    />
  );
};

export const Slider: FC<SliderProps> = (props) => (
  <Box position="relative">
    <SliderElement {...props} />
  </Box>
);

export * from './slider.types';
