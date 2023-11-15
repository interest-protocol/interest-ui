import { lineHeights } from './../../theme/design-system/line-heights';
import {
  ISizeStyle,
  TTypographySizes,
  TTypographyVariants,
} from './typography.types';

export const getSizeStyle = (
  variant: TTypographyVariants,
  size: TTypographySizes
): ISizeStyle =>
  ({
    display: {
      large: { fontSize: '8xl', lineHeight: lineHeights['6xl'] },
      medium: { fontSize: '7xl', lineHeight: lineHeights['5xl'] },
      small: { fontSize: '6xl', lineHeight: lineHeights['4xl'] },
    },
    headline: {
      large: { fontSize: '5xl', lineHeight: lineHeights['3xl'] },
      medium: { fontSize: '4xl', lineHeight: lineHeights['2xl'] },
      small: { fontSize: '3xl', lineHeight: lineHeights['xl'] },
    },
    title: {
      large: { fontSize: '2xl', lineHeight: lineHeights['l'] },
      medium: {
        fontSize: 'm',
        fontWeight: '700',
        lineHeight: lineHeights['m'],
      },
      small: { fontSize: 's', lineHeight: lineHeights['s'] },
    },
    body: {
      large: { fontSize: 'm', lineHeight: lineHeights['m'] },
      medium: { fontSize: 's', lineHeight: lineHeights['s'] },
      small: { fontSize: 'xs', lineHeight: lineHeights['xs'] },
    },
    label: {
      large: { fontSize: 's', lineHeight: lineHeights['s'] },
      medium: { fontSize: 'xs', lineHeight: lineHeights['xs'] },
      small: { fontSize: '2xs', lineHeight: lineHeights['xs'] },
    },
  }[variant][size]);
