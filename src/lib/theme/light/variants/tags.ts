import { mergeDeepRight } from 'ramda';

import { tag } from '../../variants';
import { colors } from '../colors';

const defaultTag = mergeDeepRight(tag, {
  ':disabled': {
    background: 'white',
    cursor: 'not-allowed',
    color: colors.onSurface,
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
      background: colors['primary'],
    },
  }),
  outline: mergeDeepRight(defaultTag, {
    border: '1px solid',
    color: colors.primary,
    borderColor: colors.outlineVariant,
    ':hover': {
      borderColor: colors.outlineVariant,
      background: `${colors.primary}14`,
    },
    ':focus': {
      background: `${colors.primary}1F`,
      borderColor: colors.primary,
    },
    ':active': {
      borderColor: colors.outlineVariant,
    },
    ':disabled': {
      borderColor: colors.outlineVariant,
      ':hover': { borderColor: colors.outlineVariant },
    },
  }),
};
