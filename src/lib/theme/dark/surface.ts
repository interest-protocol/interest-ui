import { palette } from '../design-system/palette';
import { MaybeNestedObject, Surface } from '../theme.types';

export const surface: Record<Surface, MaybeNestedObject> = {
  surface: { backgroundColor: palette.NEUTRAL_900 },
  surface1: {
    background:
      'linear-gradient(0deg, rgba(182, 196, 255, 0.04), rgba(182, 196, 255, 0.04)), #1B1B1F',
  },
  surface2: {
    background:
      'linear-gradient(0deg, rgba(182, 196, 255, 0.08), rgba(182, 196, 255, 0.08)), #1B1B1F',
  },
  surface3: {
    background:
      'linear-gradient(0deg, rgba(182, 196, 255, 0.12), rgba(182, 196, 255, 0.12)), #1B1B1F',
  },
  surface4: {
    background:
      'linear-gradient(0deg, rgba(182, 196, 255, 0.16), rgba(182, 196, 255, 0.16)), #1B1B1F',
  },
  surface5: {
    background:
      'linear-gradient(0deg, rgba(182, 196, 255, 0.2), rgba(182, 196, 255, 0.2)), #1B1B1F',
  },
};
