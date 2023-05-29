import { motion } from 'framer-motion';

import { Box } from '../box';
import { MotionComponent } from './motion.types';

export const Motion = motion(Box) as MotionComponent;
export * from './motion.types';
