import { breakpoints } from '../design-system/breakpoints';
import { space } from '../design-system/space';

const container = {
  gap: space.l,
  display: 'grid',
  margin: space.xl,
  justifyItems: 'center',
  gridTemplateColumns: 'repeat(4, 1fr)',
  [`@media (min-width: ${breakpoints[1]})`]: {
    gap: space.xl,
    margin: '0 auto',
    maxWidth: '80rem',
    padding: `0 ${space.xl}`,
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
};

export { container };
