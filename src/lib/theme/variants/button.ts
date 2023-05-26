import { radii, space } from '../design-system';

export const button = {
  all: 'unset',
  gap: space.m,
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  borderRadius: radii.m,
  transition: 'all 300ms ease-in-out',
};

export const buttonSizes = {
  medium: {
    padding: `${space.m} ${space['2xl']}`,
    '@media (min-width: 36rem)': {
      padding: `${space.xl} ${space['3xl']}`,
    },
  },
  small: {
    padding: `${space.m} ${space['xl']}`,
    '@media (min-width: 36rem)': {
      padding: `${space.m} ${space['xl']}`,
    },
  },
};
