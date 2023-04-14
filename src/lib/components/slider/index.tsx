import { useTheme } from '@emotion/react';
import React, {
  FC,
  MouseEvent as ReactMouseEvent,
  MouseEventHandler,
  useEffect,
  useRef,
  useState,
  useTransition,
} from 'react';

import { Box } from '../../elements';
import { Theme } from '../../theme';
import { SliderProps } from './slider.types';
import SliderToolTip from './slider-tooltip';

export const Slider: FC<SliderProps> = ({ min, max, step, value }) => (
  <SliderToolTip min={min} max={max} step={step} />
);

export * from './slider.types';
