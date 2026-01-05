import React, { FC } from 'react';

import { IDirectionalClosedProps } from './directional-menu-closed.types';
import { Motion } from '../../../../elements';
import { CaretLeftSVG, CaretRightSVG } from '../../../../icons';

const DirectionalMenuClosed: FC<IDirectionalClosedProps> = ({
  onClose,
  setIsHovered,
  isDirectionalRight,
}) => {
  return (
    <Motion
      p="1rem"
      height="100%"
      width="3.5rem"
      display="block"
      animate={{ x: '0rem' }}
      exit={{ x: isDirectionalRight ? '30rem' : '-40rem' }}
      initial={{ x: isDirectionalRight ? '30rem' : '-40rem' }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      nHover={{
        bg: '#12131380',
        borderRadius: isDirectionalRight
          ? '0.75rem 0 0 0.75rem'
          : '0 0.75rem 0.75rem 0',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isDirectionalRight ? (
        <CaretLeftSVG
          maxWidth="20"
          maxHeight="20"
          cursor="pointer"
          onClick={onClose}
        />
      ) : (
        <CaretRightSVG
          maxWidth="20"
          maxHeight="20"
          cursor="pointer"
          onClick={onClose}
        />
      )}
    </Motion>
  );
};

export default DirectionalMenuClosed;
