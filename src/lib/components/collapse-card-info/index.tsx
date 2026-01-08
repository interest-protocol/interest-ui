import { Div } from '@stylin.js/elements';
import React, { FC, useState } from 'react';
import { v4 } from 'uuid';

import { CollapseCardInfoProps } from './collapse-card-info.types';
import CollapseCardInfoHeader from './collapse-card-info-header';
import CollapseCardInfoLine from './collapse-card-info-line';
import { AnimatePresence } from 'framer-motion';
import { Motion } from '../../elements';

const CollapseCardInfo: FC<CollapseCardInfoProps> = ({ title, data }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Div
      p="1rem"
      display="flex"
      gap="0.5rem"
      flexDirection="column"
      borderRadius="0.75rem"
      border="1px solid #F3F4F61A"
    >
      <CollapseCardInfoHeader
        title={title}
        isOpen={isOpen}
        toggle={toggleAccordion}
      />
      <AnimatePresence>
        {isOpen && (
          <Motion
            style={{ overflow: 'hidden' }}
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Div gap="1rem" display="flex" flexDirection="column">
              {data.map((item) => (
                <CollapseCardInfoLine key={v4()} {...item} />
              ))}
            </Div>
          </Motion>
        )}
      </AnimatePresence>
    </Div>
  );
};

export default CollapseCardInfo;
