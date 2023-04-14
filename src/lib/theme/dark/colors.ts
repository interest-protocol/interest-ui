import { palette } from '../design-system/palette';
import { Colors } from '../theme.types';

export const colors: Record<Colors, string> = {
  error: palette.RED_200,
  text: palette.NEUTRAL_0,
  success: palette.LIME_200,
  warning: palette.ORANGE_200,
  primary: palette.PRIMARY_200,
  secondary: palette.PRIMARY_900,
  outline: palette.NEUTRAL_600,
  textSoft: palette.NEUTRAL_300,
  disabled: palette.NEUTRAL_200,
  textAccent: palette.NEUTRAL_800,
  background: palette.NEUTRAL_900,
  textDisabled: palette.NEUTRAL_50,
  textPlaceholder: palette.NEUTRAL_500,
};
