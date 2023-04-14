import { palette } from '../design-system/palette';
import { Colors } from '../theme.types';

export const colors: Record<Colors, string> = {
  error: palette.RED_500,
  success: palette.LIME_500,
  text: palette.NEUTRAL_1000,
  warning: palette.ORANGE_500,
  primary: palette.PRIMARY_500,
  outline: palette.NEUTRAL_300,
  secondary: palette.PRIMARY_900,
  disabled: palette.NEUTRAL_200,
  textAccent: palette.PRIMARY_50,
  background: palette.NEUTRAL_50,
  textSoft: palette.NEUTRAL_500,
  textDisabled: palette.NEUTRAL_900,
  textPlaceholder: palette.NEUTRAL_300,
};
