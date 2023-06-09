import { mergeDeepRight } from 'ramda';

import { space } from '../../design-system/space';
import { button } from '../../variants';
import { colors } from '../colors';

const defaultButton = mergeDeepRight(button, {
  ':disabled': {
    background: colors['surface.container'],
    cursor: 'not-allowed',
    color: colors.onSurface,
  },
});

export const variants = {
  filled: mergeDeepRight(defaultButton, {
    color: colors['primary.onPrimary'],
    background: colors.primary,
    ':disabled': {
      background: colors['surface.container'],
    },
  }),
  outline: mergeDeepRight(defaultButton, {
    border: '1px solid',
    color: colors.primary,
    borderColor: colors['outline.outlineVariant'],
    ':hover': {
      borderColor: colors['outline.outlineVariant'],
      background: `${colors.primary}14`,
    },
    ':focus': {
      background: `${colors.primary}1F`,
      borderColor: colors.primary,
    },
    ':active': {
      borderColor: colors['outline.outlineVariant'],
    },
    ':disabled': {
      borderColor: colors['outline.outlineVariant'],
      ':hover': { borderColor: colors['outline.outlineVariant'] },
    },
  }),
  text: mergeDeepRight(defaultButton, {
    color: colors.primary,
    ':hover': {
      background: `${colors.primary}14`,
    },
    ':focus': {
      background: `${colors.primary}14`,
    },
  }),
  tonal: mergeDeepRight(defaultButton, {
    color: colors['secondary.onSecondaryContainer'],
    background: colors['secondary.secondaryContainer'],
    ':hover': {
      background: `${colors.primary}14`,
    },
    ':focus': {
      background: `${colors.primary}1F`,
    },
    ':active': {
      background: `${colors.primary}1F`,
    },
  }),
  icon: mergeDeepRight(button, {
    padding: space.s,
    color: colors.onSurface,
    '@media (min-width: 36rem)': {
      padding: space.s,
    },
    ':hover': {
      background: `${colors.primary}14`,
    },
    ':active': {
      background: `${colors.primary}1F`,
    },
  }),
};
