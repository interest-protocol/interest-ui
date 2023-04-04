import { fontSizes, lineHeights } from '../design-system';

const displayLarge = {
  letterSpacing: '-2%',
  textTransform: 'uppercase',
  fontSize: fontSizes['8xl'],
  lineHeight: lineHeights['5xl'],
  fontFamily: "'Share Tech Mono', monospace",
  '@media (min-width: 36em)': {
    fontSize: fontSizes['9xl'],
    lineHeight: lineHeights['7xl'],
  },
};

const displaySmall = {
  letterSpacing: '-2%',
  textTransform: 'uppercase',
  fontSize: fontSizes['7xl'],
  lineHeight: lineHeights['5xl'],
  fontFamily: "'Share Tech Mono', monospace",
  '@media (min-width: 36em)': {
    fontSize: fontSizes['8xl'],
    lineHeight: lineHeights['6xl'],
  },
};

const title1 = {
  fontSize: fontSizes['5xl'],
  lineHeight: lineHeights['5xl'],
  '@media (min-width: 36em)': {
    fontSize: fontSizes['6xl'],
    lineHeight: lineHeights['6xl'],
  },
};

const title2 = {
  fontSize: fontSizes['4xl'],
  lineHeight: lineHeights['4xl'],
  '@media (min-width: 36em)': {
    fontSize: fontSizes['5xl'],
    lineHeight: lineHeights['5xl'],
  },
};

const title3 = {
  fontSize: fontSizes['3xl'],
  lineHeight: lineHeights['3xl'],
  '@media (min-width: 36em)': {
    fontSize: fontSizes['4xl'],
    lineHeight: lineHeights['4xl'],
  },
};

const title4 = {
  fontSize: fontSizes['2xl'],
  lineHeight: lineHeights['2xl'],
  '@media (min-width: 36em)': {
    fontSize: fontSizes['3xl'],
    lineHeight: lineHeights['3xl'],
  },
};

const title5 = {
  fontSize: fontSizes['xl'],
  lineHeight: lineHeights['xl'],
  '@media (min-width: 36em)': {
    fontSize: fontSizes['2xl'],
    lineHeight: lineHeights['2xl'],
  },
};

const title6 = {
  fontSize: fontSizes['l'],
  lineHeight: lineHeights['l'],
  '@media (min-width: 36em)': {
    fontSize: fontSizes['xl'],
    lineHeight: lineHeights['xl'],
  },
};

const large = {
  fontSize: fontSizes['l'],
  lineHeight: lineHeights['l'],
};

const medium = {
  fontSize: fontSizes['m'],
  lineHeight: lineHeights['m'],
};

const small = {
  fontSize: fontSizes['s'],
  lineHeight: lineHeights['s'],
};

const extraSmall = {
  fontSize: fontSizes['xs'],
  lineHeight: lineHeights['xs'],
};

export {
  displayLarge,
  displaySmall,
  extraSmall,
  large,
  medium,
  small,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
};
