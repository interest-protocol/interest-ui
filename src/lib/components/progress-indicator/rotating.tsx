import { useTheme } from '@emotion/react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import React, { FC } from 'react';
import { Theme } from '../../theme';
import { Box } from '../../elements';

interface ProgressCircleProps {
  size: number;
  strokeWidth: number;
}

const ProgressCircleRotating: FC<ProgressCircleProps> = ({ size }) => {
  const theme = useTheme() as Theme;

  const rotate = useMotionValue(0);
  const rotation = useTransform(rotate, [0, 360], ['0deg', '360deg']);

  return (
    <motion.div
      style={{
        width: size,
        height: size,
        backgroundImage: `conic-gradient( ${theme.colors.accent} 25%, ${theme.colors.background} 25%)`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        transform: `rotate(${rotation})`,
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1.5,
        ease: 'linear',
        repeat: Infinity,
      }}
    >
      <Box
        width="80%"
        height="80%"
        borderRadius="50%"
        background="background"
      />
    </motion.div>
  );
};

export default ProgressCircleRotating;
