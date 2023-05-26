import {
  breakpoints,
  fontSizes,
  lineHeights,
  radii,
  space,
} from '../design-system';
import { Theme } from '../theme.types';
import { boxes, buttonSizes, typography } from '../variants';
import { colors } from './colors';
import { surface } from './surface';
import { buttons } from './variants';

const theme: Theme = {
  dark: true,
  typography,
  fontSizes,
  lineHeights,
  buttonSizes,
  breakpoints,
  space,
  radii,
  colors,
  boxes,
  buttons,
  surface,
};

export default theme;
