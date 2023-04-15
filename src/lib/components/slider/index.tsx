import React, { FC } from 'react';

import { SliderProps } from './slider.types';
import SliderElement from './slider';

export const Slider: FC<SliderProps> = ({
  min,
  max,
  step,
  initial,
  disabled,
}) => (
  <SliderElement
    initial={initial || 0}
    max={max}
    step={step || 1}
    disabled={disabled}
  />
);

export * from './slider.types';
