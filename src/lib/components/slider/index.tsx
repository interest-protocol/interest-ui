import React, { FC } from 'react';

import SliderElement from './slider';
import { SliderProps } from './slider.types';

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
    min={min}
    step={step || 1}
    disabled={disabled}
  />
);

export * from './slider.types';
