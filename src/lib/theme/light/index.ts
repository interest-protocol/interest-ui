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
import { buttons, tags } from './variants';

const theme: Theme = {
  dark: false,
  fontSizes,
  typography,
  lineHeights,
  breakpoints,
  radii,
  space,
  colors,
  shadows,
  tags,
  boxes,
  gradient,
  buttons,
};

export default theme;
