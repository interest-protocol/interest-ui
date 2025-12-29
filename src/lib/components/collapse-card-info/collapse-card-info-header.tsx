import { Button, Div, P } from '@stylin.js/elements';
import React, { FC } from 'react';

import { CollapseCardInfoHeaderProps } from './collapse-card-info.types';
import { Motion } from '../../elements';
import { ChevronDownSVG } from '../../icons';

const CollapseCardInfoHeader: FC<CollapseCardInfoHeaderProps> = ({
  title,
  toggle,
  isOpen,
}) => {
  return (
    <Div
      display="flex"
      cursor="pointer"
      onClick={toggle}
      justifyContent="space-between"
    >
      <P
        color="#FFF"
        fontSize="1rem"
        fontWeight="500"
        fontFamily="Satoshi"
        lineHeight="1.5rem"
      >
        {title}
      </P>
      <Motion
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <Button
          p="unset"
          border="none"
          color="#FFF"
          cursor="pointer"
          bg="transparent"
        >
          <ChevronDownSVG maxHeight="0.75rem" maxWidth="0.75rem" width="100%" />
        </Button>
      </Motion>
    </Div>
  );
};

export default CollapseCardInfoHeader;
