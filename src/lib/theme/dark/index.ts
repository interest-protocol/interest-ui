import {
  breakpoints,
  fontSizes,
  gradient,
  lineHeights,
  radii,
  shadows,
  space,
} from '../design-system';
import { Theme } from '../theme.types';
import { boxes, typography } from '../variants';
import { colors } from './colors';
import { buttons } from './variants';

const theme: Theme = {
  dark: true,
  typography,
  fontSizes,
  lineHeights,
  breakpoints,
  space,
  radii,
  colors,
  shadows,
  boxes,
  gradient,
  buttons,
};

export default theme;
