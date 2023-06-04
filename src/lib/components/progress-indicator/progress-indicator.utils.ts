import { Theme } from '../../theme';

export const getProgressBarColor = (value: number, colors: Theme['colors']) => {
  if (value <= 50) return colors.semantic.success;
  if (value <= 75) return colors.semantic.warning;
  if (value <= 100) return colors.semantic.error;
  return 'transparent';
};
