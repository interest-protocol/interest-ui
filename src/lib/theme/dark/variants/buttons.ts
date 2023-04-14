import { mergeDeepRight } from 'ramda';

import { space } from '../../design-system/space';
import { button } from '../../variants';
import { colors } from '../colors';

const defaultButton = mergeDeepRight(button, {
  ':disabled': {
    opacity: '26%',
    cursor: 'not-allowed',
    color: colors.textDisabled,
    ':hover': {
      color: colors.textDisabled,
    },
  },
});

export const variants = {
  filled: mergeDeepRight(defaultButton, {
    color: colors.textAccent,
    background: colors.primary,
    ':disabled': {
      background: colors.disabled,
    },
  }),
  outline: mergeDeepRight(defaultButton, {
    border: '1px solid',
    color: colors.primary,
    borderColor: colors.outline,
    ':hover': {
      borderColor: colors.primary,
      background: `${colors.primary}08`,
    },
    ':disabled': {
      borderColor: colors.disabled,
      ':hover': { borderColor: colors.disabled },
    },
  }),
  text: mergeDeepRight(defaultButton, {
    color: colors.primary,
    ':hover': {
      background: `${colors.primary}08`,
    },
  }),
  icon: mergeDeepRight(button, {
    padding: space.s,
    color: colors.text,
    '@media (min-width: 36rem)': {
      padding: space.s,
    },
    ':hover': {
      background: `${colors.text}08`,
    },
    ':active': {
      background: `${colors.text}0B`,
    },
  }),
};
