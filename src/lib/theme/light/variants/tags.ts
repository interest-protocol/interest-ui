import { mergeDeepRight } from 'ramda';

import { tag } from '../../variants';
import { colors } from '../colors';

const defaultTag = mergeDeepRight(tag, {
  ':disabled': {
    opacity: 0.32,
    cursor: 'not-allowed',
    color: colors.onSurface,
    background: colors.outlineVariant,
  },
});

export const variants = {
  filled: mergeDeepRight(defaultTag, {
    color: colors.onSurface,
    background: '#fff',
    ':hover': {
      background: '#00000014',
    },
    ':focus': {
      background: colors.primary,
      color: 'white',
    },
    ':active': {
      background: colors.primary,
      color: 'white',
    },
    ':disabled': {
      background: colors.outlineVariant,
    },
  }),
  outline: mergeDeepRight(defaultTag, {
    border: '1px solid',
    color: colors.onSurface,
    borderColor: colors.outlineVariant,
    ':hover': {
      borderColor: colors.primary,
      background: `${colors.primary}14`,
    },
    ':focus': {
      color: 'white',
      background: colors.primary,
    },
    ':active': {
      color: 'white',
      background: colors.primary,
    },
    ':disabled': {
      background: colors.outlineVariant,
      borderColor: colors.outlineVariant,
      ':hover': {
        background: colors.outlineVariant,
        borderColor: colors.outlineVariant,
      },
    },
  }),
};
