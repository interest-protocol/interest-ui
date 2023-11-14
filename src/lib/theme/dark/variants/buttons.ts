import { mergeDeepRight } from 'ramda';

import { button } from '../../variants';
import { colors } from '../colors';
const defaultButton = mergeDeepRight(button, {
  ':disabled': {
    background: colors.container,
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
      border: '0.25rem solid',
      borderColor: `${colors.primaryContainer}`,
    },
    ':active': {
      background: `${colors.primary}`,
      border: '0.25rem solid',
      borderColor: `${colors.primaryContainer}`,
    },
    ':disabled': {
      opacity: '0.32',
      color: colors.onSurface,
      ':hover': {
        background: `${colors.container}29`,
      },
      ':focus': {
        background: `${colors.container}29`,
        border: 'unset',
        borderColor: 'unset',
      },
      ':active': {
        background: `${colors.container}29`,
        border: 'unset',
        borderColor: 'unset',
      },
    },
  }),
  outline: mergeDeepRight(defaultButton, {
    border: '1px solid',
    color: colors.onSurface,
    borderColor: colors.outline,
    ':hover': {
      border: '1px solid',
      borderColor: colors.primary,
      color: colors.primary,
      background: `${colors.primary}14`,
    },
    ':focus': {
      border: '0.25rem solid',
      color: colors.primary,
      borderColor: `${colors.primary}16`,
      background: `transparent`,
    },
    ':active': {
      color: colors.primary,
      border: '0.25rem solid',
      borderColor: `${colors.primary}16`,
      background: `transparent`,
    },
    ':disabled': {
      opacity: '0.32',
      border: 'unset',
      color: colors.onSurface,
      ':hover': {
        background: `${colors.container}29`,
        border: 'unset',
        color: colors.onSurface,
      },
      ':focus': {
        background: `${colors.container}29`,
        border: 'unset',
        borderColor: 'unset',
      },
      ':active': {
        background: `${colors.container}29`,
        border: 'unset',
        borderColor: 'unset',
      },
    },
  }),
  text: mergeDeepRight(defaultButton, {
    color: colors.onSurface,
    ':hover': {
      background: `${colors.container}29`,
    },
    ':active': {
      color: colors.primary,
      border: '0.25rem solid',
      borderColor: `${colors.primary}16`,
      background: `transparent`,
    },
    ':disabled': {
      opacity: '0.32',
      color: colors.onSurface,
      background: 'transparent',
      ':hover': { background: 'transparent' },
      ':active': {
        background: 'transparent',
        border: 'none',
        color: colors.onSurface,
        borderColor: 'unset',
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
      border: '0.25rem solid',
      borderColor: `${colors.primary}16`,
      background: `transparent`,
    },
    ':active': {
      color: colors.onSurface,
      border: '0.25rem solid',
      borderColor: `${colors.primary}16`,
      background: `${colors.primary}14`,
    },
    ':disabled': {
      opacity: '0.32',
      color: colors.onSurface,
      background: `${colors.container}29`,
      ':hover': { background: `${colors.container}29` },
      ':active': {
        background: `${colors.container}29`,
        border: 'none',
        color: colors.onSurface,
        borderColor: 'unset',
      },
    },
  }),
};
