import {
  breakpoints,
  fontSizes,
  lineHeights,
  radii,
  space,
} from '../design-system';
import { Theme } from '../theme.types';
import { boxes, typography } from '../variants';
import { buttonSizes } from './../variants/button';
import { colors } from './colors';
import { surface } from './surface';
import { buttons } from './variants';

const theme: Theme = {
  dark: false,
  fontSizes,
  typography,
  lineHeights,
  breakpoints,
  buttonSizes,
  radii,
  space,
  colors,
  boxes,
  buttons,
  surface,
};

export default theme;
