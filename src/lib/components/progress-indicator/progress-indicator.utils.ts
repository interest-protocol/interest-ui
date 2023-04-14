import { Theme } from '../../theme';

export const getProgressBarColor = (value: number, colors: Theme['colors']) => {
  if (value <= 50) return colors['success'];
  if (value <= 75) return colors['warning'];
  if (value <= 100) return colors['error'];
  return 'transparent';
};
