import { Theme } from '../../theme';
import { ProgressStatus } from './progress-indicator.types';

export const getProgressColor = (
  colors: Theme['colors'],
  status?: ProgressStatus
) => {
  if (status == 'success') return colors.success;
  if (status == 'warning') return colors.warning;
  if (status == 'danger') return colors.error;
  return colors.primary;
};
