import { fontSizes, lineHeights } from '../design-system';

const displayLarge = {
  lineHeight: lineHeights['6xl'],
  fontSize: fontSizes['8xl'],
  fontStyle: 'normal',
  fontWeight: '400',
  fontFamily: 'Proto Mono',
  '@media (min-width: 36em)': {
    fontSize: fontSizes['9xl'],
    lineHeight: lineHeights['6xl'],
  },
};

const displayMedium = {
  lineHeight: lineHeights['5xl'],
  fontSize: fontSizes['7xl'],
  fontStyle: 'normal',
  fontWeight: '500',
  fontFamily: 'Proto',
  '@media (min-width: 36em)': {
    fontSize: fontSizes['8xl'],
    lineHeight: lineHeights['6xl'],
  },
};

const displaySmall = {
  lineHeight: lineHeights['4xl'],
  fontSize: fontSizes['6xl'],
  fontStyle: 'normal',
  fontWeight: '500',
  fontFamily: 'Proto',
  '@media (min-width: 36em)': {
    fontSize: fontSizes['7xl'],
    lineHeight: lineHeights['6xl'],
  },
};

const headlineLarge = {
  fontFamily: 'Proto',
  fontSize: fontSizes['5xl'],
  lineHeight: lineHeights['3xl'],
  fontWeight: '500',
  fontStyle: 'normal',
  '@media (min-width: 36em)': {
    fontSize: fontSizes['6xl'],
    lineHeight: lineHeights['5xl'],
  },
};

const headlineMedium = {
  fontFamily: 'Proto',
  fontSize: fontSizes['4xl'],
  lineHeight: lineHeights['2xl'],
  fontWeight: '500',
  fontStyle: 'normal',
  '@media (min-width: 36em)': {
    fontSize: fontSizes['5xl'],
    lineHeight: lineHeights['4xl'],
  },
};

const headlineSmall = {
  fontFamily: 'Proto',
  fontSize: fontSizes['3xl'],
  lineHeight: lineHeights['xl'],
  fontWeight: '500',
  fontStyle: 'normal',
  '@media (min-width: 36em)': {
    fontSize: fontSizes['4xl'],
    lineHeight: lineHeights['3xl'],
  },
};

const titleLarge = {
  fontFamily: 'Satoshi',
  fontSize: fontSizes['2xl'],
  lineHeight: lineHeights['l'],
  fontWeight: '500',
  fontStyle: 'normal',
  '@media (min-width: 36em)': {
    fontSize: fontSizes['4xl'],
    lineHeight: lineHeights['2xl'],
  },
};

const titleMedium = {
  fontFamily: 'Satoshi',
  fontSize: fontSizes['m'],
  lineHeight: lineHeights['m'],
  fontWeight: '700',
  fontStyle: 'normal',
  '@media (min-width: 36em)': {
    fontSize: fontSizes['xl'],
    lineHeight: lineHeights['xl'],
  },
};

const titleSmall = {
  fontFamily: 'Satoshi',
  fontSize: fontSizes['s'],
  lineHeight: lineHeights['s'],
  fontWeight: '500',
  fontStyle: 'normal',
  '@media (min-width: 36em)': {
    fontSize: fontSizes['l'],
    lineHeight: lineHeights['l'],
  },
};

const bodyLarge = {
  fontFamily: 'Satoshi',
  fontSize: fontSizes['m'],
  lineHeight: lineHeights['m'],
  fontWeight: '500',
  fontStyle: 'normal',
  '@media (min-width: 36em)': {
    fontSize: fontSizes['xl'],
    lineHeight: lineHeights['xl'],
  },
};

const bodyMedium = {
  fontFamily: 'Satoshi',
  fontSize: fontSizes['s'],
  lineHeight: lineHeights['s'],
  fontWeight: '500',
  fontStyle: 'normal',
  '@media (min-width: 36em)': {
    fontSize: fontSizes['l'],
    lineHeight: lineHeights['l'],
  },
};

const bodySmall = {
  fontFamily: 'Satoshi',
  fontSize: fontSizes['xs'],
  lineHeight: lineHeights['xs'],
  fontWeight: '500',
  fontStyle: 'normal',
  '@media (min-width: 36em)': {
    fontSize: fontSizes['m'],
    lineHeight: lineHeights['m'],
  },
};

const labelLarge = {
  fontFamily: 'Proto',
  fontSize: fontSizes['s'],
  lineHeight: lineHeights['s'],
  fontWeight: '500',
  fontStyle: 'normal',
  '@media (min-width: 36em)': {
    fontSize: fontSizes['l'],
    lineHeight: lineHeights['l'],
  },
};

const labelMedium = {
  fontFamily: 'Proto',
  fontSize: fontSizes['xs'],
  lineHeight: lineHeights['xs'],
  fontWeight: '500',
  fontStyle: 'normal',
  '@media (min-width: 36em)': {
    fontSize: fontSizes['m'],
    lineHeight: lineHeights['m'],
  },
};

const labelSmall = {
  fontFamily: 'Proto',
  fontSize: fontSizes['2xs'],
  lineHeight: lineHeights['xs'],
  fontWeight: '500',
  fontStyle: 'normal',
  '@media (min-width: 36em)': {
    fontSize: fontSizes['m'],
    lineHeight: lineHeights['m'],
  },
};

export {
  bodyLarge,
  bodyMedium,
  bodySmall,
  displayLarge,
  displayMedium,
  displaySmall,
  headlineLarge,
  headlineMedium,
  headlineSmall,
  labelLarge,
  labelMedium,
  labelSmall,
  titleLarge,
  titleMedium,
  titleSmall,
};
