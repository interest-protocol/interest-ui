import { breakpoints } from '../design-system/breakpoints';
import { space } from '../design-system/space';

const container = {
  gap: space.l,
  display: 'grid',
  margin: space.xl,
  justifyItems: 'center',
  gridTemplateColumns: 'repeat(4, 1fr)',
  [`@media (min-width: ${breakpoints[0]})`]: {
    gap: space['2xl'],
    margin: space['3xl'],
  },
  [`@media (min-width: ${breakpoints[1]})`]: {
    gap: space.l,
    margin: `${space['3xl']} auto`,
    gridTemplateColumns: 'repeat(8, 3.813rem)',
    maxWidth: `calc(${3.813 * 8}rem + calc(${space.l} * 7))`,
  },
  [`@media (min-width: ${breakpoints[2]})`]: {
    gap: space.xl,
    maxWidth: 'unset',
    margin: space['3xl'],
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
  [`@media (min-width: ${breakpoints[3]})`]: {
    gap: space.xl,
    margin: `${space['3xl']} auto`,
    gridTemplateColumns: 'repeat(12, 4.625rem)',
    maxWidth: `calc(${4.625 * 12}rem + calc(${space.xl} * 11))`,
  },
};

export { container };
