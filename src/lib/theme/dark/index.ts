import {
  breakpoints,
  fontSizes,
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
  buttons,
};

export default theme;
