import { Div } from '@stylin.js/elements';
import React, { FC, PropsWithChildren, useState } from 'react';

import { IDirectionalMenuProps } from './directional-menu.types';
import DirectionalMenuClosed from './directional-menu-closed';
import { Motion } from '../../../elements';

const DirectionalMenu: FC<PropsWithChildren<IDirectionalMenuProps>> = ({
  onClose,
  children,
  isDirectionalRight,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Motion
      layout
      top="0"
      left="0"
      px="1rem"
      width="100%"
      py="1.875rem"
      zIndex="9999"
      display="flex"
      height="100vh"
      position="fixed"
      onClick={onClose}
      minHeight="100vh"
      alignItems="stretch"
      initial={{ opacity: 1 }}
      backdropFilter="blur(10px)"
      exit={{ opacity: 0, transition: { delay: 0.4 } }}
      animate={{ opacity: 1, transition: { duration: 0.1 } }}
      justifyContent={isDirectionalRight ? 'flex-end' : 'flex-start'}
    >
      <Div
        width="100%"
        display="flex"
        flexDirection={isDirectionalRight ? 'row-reverse' : 'row'}
      >
        <Motion
          bg="#121313"
          display="flex"
          overflowY="auto"
          border="1px solid"
          flexDirection="column"
          animate={{
            x: '0rem',
            transition: { duration: 0.4, ease: 'easeInOut' },
          }}
          borderColor="#FFFFFF1A"
          justifyContent="space-between"
          onClick={(e) => e.stopPropagation()}
          p={isDirectionalRight ? 'unset' : '1.5rem'}
          exit={{
            x: isDirectionalRight ? '30rem' : '-40rem',
            transition: { duration: 0.4, ease: 'easeInOut' },
          }}
          initial={{ x: isDirectionalRight ? '30rem' : '-40rem' }}
          width={[
            '100%',
            '100%',
            '100%',
            isDirectionalRight ? '24rem' : '14.5rem',
          ]}
          borderRadius={
            isHovered
              ? isDirectionalRight
                ? '0 0.75rem  0.75rem 0'
                : '0.75rem 0  0 0.75rem'
              : '0.75rem'
          }
        >
          {children}
        </Motion>
        <DirectionalMenuClosed
          onClose={onClose}
          setIsHovered={setIsHovered}
          isDirectionalRight={isDirectionalRight}
        />
      </Div>
    </Motion>
  );
};

export default DirectionalMenu;
