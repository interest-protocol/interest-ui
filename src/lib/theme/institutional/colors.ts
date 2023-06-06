import { Theme } from '../theme.types';

export const colors: Theme['colors'] = {
  error: '#FECACA',
  success: '#D9F99D',
  warning: '#FED7AA',
  onSurface: '#C7C6CA',
  onSurfaceVariant: '#C5C6D0',
  inverseSurface: '#E4E2E6',
  inverseOnSurface: '#1B1B1F',
  primary: {
    primary: '#B4C5FF',
    onPrimary: '#002A78',
    primaryContainer: '#003EA8',
    onPrimaryContainer: '#DBE1FF',
  },
  secondary: {
    secondary: '#C1C5DD',
    onSecondary: '#2B3042',
    secondaryContainer: '#414659',
    onSecondaryContainer: '#DDE1F9',
  },
  outline: {
    outline: '#8F909A',
    outlineVariant: '#45464F',
  },
  surface: {
    surface: '#131316',
    containerHighest: '#343438',
    containerHigh: '#292A2D',
    container: '#1F1F23',
    containerLow: '#1B1B1F',
    containerLowest: '#0D0E11',
    dim: '#131316',
    surfaceVariant: '#45464F',
  },
};
