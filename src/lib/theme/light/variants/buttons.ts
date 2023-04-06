import { mergeDeepRight } from 'ramda';

import { radii } from '../../design-system';
import { space } from '../../design-system/space';
import { colors } from '../colors';

const button = {
  all: 'unset',
  cursor: 'pointer',
  borderRadius: radii.m,
  ':disabled': {
    opacity: '26%',
    cursor: 'not-allowed',
    color: colors.textDisabled,
    ':hover': {
      color: colors.textDisabled,
    },
  },
};

export const sizes = {
  icon: {
    width: '2.5rem',
    height: '2.5rem',
    padding: space.s,
    textAlign: 'center',
  },
  medium: {
    padding: `${space.m} ${space['2xl']}`,
  },
  large: {
    padding: `${space.xl} ${space['3xl']}`,
  },
};

export const variants = {
  filled: mergeDeepRight(button, {
    color: colors.textAccent,
    background: colors.accent,
    ':disabled': {
      background: colors.disabled,
    },
  }),
  outline: mergeDeepRight(button, {
    border: '1px solid',
    color: colors.accent,
    borderColor: colors.outline,
    ':hover': {
      borderColor: colors.accent,
      background: `${colors.accent}08`,
    },
    ':disabled': {
      borderColor: colors.disabled,
      ':hover': { borderColor: colors.disabled },
    },
  }),
  text: mergeDeepRight(button, {
    color: colors.accent,
    ':hover': {
      background: `${colors.accent}08`,
    },
  }),
  icon: mergeDeepRight(button, {
    color: colors.text,
    ':hover': {
      background: `${colors.text}08`,
    },
    ':active': {
      background: `${colors.text}0B`,
    },
  }),
};
