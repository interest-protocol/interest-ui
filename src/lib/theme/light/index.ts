import {
  breakpoints,
  fontSizes,
  lineHeights,
  radii,
  space,
} from '../design-system';
import { Theme } from '../theme.types';
import { boxes, typography } from '../variants';
import { colors } from './colors';
import { buttons } from './variants';

const theme: Theme = {
  dark: false,
  fontSizes,
  typography,
  lineHeights,
  breakpoints,
  radii,
  space,
  colors,
  boxes,
  buttons,
};

export default theme;
