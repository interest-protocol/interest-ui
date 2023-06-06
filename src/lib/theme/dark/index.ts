import {
  breakpoints,
  fontSizes,
  lineHeights,
  radii,
  space,
} from '../design-system';
import { institutionalColors } from '../institutional/institutional-colors';
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
  institutionalColors,
  colors,
  boxes,
  buttons,
};

export default theme;
