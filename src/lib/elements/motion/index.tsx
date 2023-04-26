import { CustomDomComponent, motion } from 'framer-motion';

import { Box, BoxProps } from '../box';

export const Motion = motion(Box) as CustomDomComponent<
  Omit<BoxProps, 'transition'>
>;
