import { mergeDeepRight } from 'ramda';

import { button } from '../../variants';
import { colors } from '../colors';

const defaultButton = mergeDeepRight(button, {
  ':disabled': {
    background: '#00000029',
    cursor: 'not-allowed',
    color: colors.onSurface,
  },
});

export const variants = {
  filled: mergeDeepRight(defaultButton, {
    color: colors.onPrimary,
    background: colors.primary,
    ':hover': {
      background: `linear-gradient(0deg, #FFF2, #FFF2), ${colors.primary}`,
    },
    ':focus': {
      background: `linear-gradient(0deg, #FFF2, #FFF2), ${colors.primary}`,
    },
    ':active': {
      background: colors.primary,
    },
    ':disabled': {
      opacity: '0.32',
      color: colors.onSurface,
      ':hover': {
        background: '#00000029',
      },
      ':focus': {
        background: '#00000029',
      },
      ':active': {
        background: '#00000029',
      },
    },
  }),
  outline: mergeDeepRight(defaultButton, {
    border: '1px solid',
    color: colors.onSurface,
    borderColor: colors.outline,
    ':hover': {
      color: colors.primary,
      borderColor: colors.primary,
      background: `${colors.primary}14`,
    },
    ':focus': {
      borderColor: colors.primary,
      color: colors.primary,
      background: `transparent`,
    },
    ':active': {
      color: colors.primary,
      borderColor: 'transparent',
      background: `transparent`,
    },
    ':disabled': {
      opacity: '0.32',
      border: '1px solid',
      borderColor: colors.outline,
      color: colors.onSurface,
      background: 'transparent',
      ':hover': {
        background: 'transparent',
        borderColor: colors.outline,
        color: colors.onSurface,
      },
      ':focus': {
        background: 'transparent',
        borderColor: colors.outline,
        color: colors.onSurface,
      },
      ':active': {
        background: 'transparent',
        borderColor: colors.outline,
        color: colors.onSurface,
      },
    },
  }),
  text: mergeDeepRight(defaultButton, {
    color: colors.onSurface,
    ':hover': {
      background: `#00000029`,
    },
    ':active': {
      color: colors.primary,
      background: `transparent`,
    },
    ':disabled': {
      background: 'transparent',
      color: colors.outline,
      ':hover': { background: 'transparent' },
      ':active': {
        background: 'transparent',
        color: colors.outline,
      },
    },
  }),
  tonal: mergeDeepRight(defaultButton, {
    color: colors.onPrimaryContainer,
    background: `${colors.primary}14`,
    ':hover': {
      background: `${colors.primary}29`,
    },
    ':focus': {
      color: colors.primary,
      background: `${colors.primary}14`,
    },
    ':active': {
      color: colors.onSurface,
      background: `transparent`,
    },
    ':disabled': {
      color: colors.outline,
      background: '#00000029',
      ':hover': { background: '#00000029' },
      ':active': {
        background: '#00000029',
        color: colors.outline,
      },
    },
  }),
};
