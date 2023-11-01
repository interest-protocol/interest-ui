import { fontSizes, lineHeights } from '../design-system';

const displayLarge = {
  letterSpacing: '-2%',
  textTransform: 'uppercase',
  fontSize: fontSizes['8xl'],
  lineHeight: lineHeights['m'],
  fontFamily: "'Share Tech Mono', monospace",
  '@media (min-width: 36em)': {
    fontSize: fontSizes['9xl'],
    lineHeight: lineHeights['m'],
  },
};

const displaySmall = {
  letterSpacing: '-2%',
  textTransform: 'uppercase',
  fontSize: fontSizes['7xl'],
  lineHeight: lineHeights['m'],
  fontFamily: "'Share Tech Mono', monospace",
  '@media (min-width: 36em)': {
    fontSize: fontSizes['8xl'],
    lineHeight: lineHeights['m'],
  },
};

const title1 = {
  fontSize: fontSizes['5xl'],
  lineHeight: lineHeights['m'],
  '@media (min-width: 36em)': {
    fontSize: fontSizes['6xl'],
    lineHeight: lineHeights['m'],
  },
};

const title2 = {
  fontSize: fontSizes['4xl'],
  lineHeight: lineHeights['m'],
  '@media (min-width: 36em)': {
    fontSize: fontSizes['5xl'],
    lineHeight: lineHeights['m'],
  },
};

const title3 = {
  fontSize: fontSizes['3xl'],
  lineHeight: lineHeights['m'],
  '@media (min-width: 36em)': {
    fontSize: fontSizes['4xl'],
    lineHeight: lineHeights['m'],
  },
};

const title4 = {
  fontSize: fontSizes['2xl'],
  lineHeight: lineHeights['m'],
  '@media (min-width: 36em)': {
    fontSize: fontSizes['3xl'],
    lineHeight: lineHeights['m'],
  },
};

const title5 = {
  fontSize: fontSizes['xl'],
  lineHeight: lineHeights['m'],
  '@media (min-width: 36em)': {
    fontSize: fontSizes['2xl'],
    lineHeight: lineHeights['m'],
  },
};

const title6 = {
  fontSize: fontSizes['l'],
  lineHeight: lineHeights['m'],
  '@media (min-width: 36em)': {
    fontSize: fontSizes['xl'],
    lineHeight: lineHeights['m'],
  },
};

const large = {
  fontSize: fontSizes['l'],
  lineHeight: lineHeights['m'],
};

const medium = {
  fontSize: fontSizes['m'],
  lineHeight: lineHeights['s'],
};

const small = {
  fontSize: fontSizes['s'],
  lineHeight: lineHeights['xs'],
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
