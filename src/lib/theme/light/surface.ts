import { palette } from '../design-system/palette';
import { MaybeNestedObject, Surface } from '../theme.types';

export const surface: Record<Surface, MaybeNestedObject> = {
  surface: { backgroundColor: palette.NEUTRAL_50 },
  surface1: {
    background:
      'linear-gradient(0deg, rgba(0, 85, 255, 0.04), rgba(0, 85, 255, 0.04)), #F2F0F4',
  },
  surface2: {
    background:
      'linear-gradient(0deg, rgba(0, 85, 255, 0.08), rgba(0, 85, 255, 0.08)), #F2F0F4',
  },
  surface3: {
    background:
      'linear-gradient(0deg, rgba(0, 85, 255, 0.12), rgba(0, 85, 255, 0.12)), #F2F0F4',
  },
  surface4: {
    background:
      'linear-gradient(0deg, rgba(0, 85, 255, 0.16), rgba(0, 85, 255, 0.16)), #F2F0F4  ',
  },
  surface5: {
    background:
      'linear-gradient(0deg, rgba(0, 85, 255, 0.2), rgba(0, 85, 255, 0.2)), #F2F0F4',
  },
};
