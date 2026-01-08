import { Div, Span } from '@stylin.js/elements';
import React, { FC } from 'react';
import { v4 } from 'uuid';

import { Button } from '../button';
import { TabsProps } from './tabs.types';

const Tabs: FC<TabsProps> = ({
  tab,
  tabs,
  color,
  total,
  setTab,
  isShortSize,
}) => (
  <>
    {tabs.map((text, index) => {
      const tabTotal = total?.[index];

      return (
        <Button
          key={v4()}
          gap="1rem"
          py="0.5rem"
          display="flex"
          border="none"
          fontSize="1rem"
          cursor="pointer"
          variant="outline"
          alignItems="center"
          lineHeight="1.7rem"
          borderRadius="9999rem"
          justifyContent="center"
          onClick={() => setTab(index)}
          nHover={{ color: '#B4C5FF' }}
          width={
            isShortSize ? 'max-content' : ['100%', '100%', '100%', 'unset']
          }
          fontWeight={tab === index ? '400' : '500'}
          px={['0.65rem', '0.65rem', '1rem', '1rem']}
          color={tab === index ? '#FFFFFF' : '#9CA3AF'}
          bg={tab === index ? color || '#9CA3AF1A' : 'transparent'}
          data-testid={`tab-button-${index}`}
          data-index={index}
          data-active={tab === index}
        >
          {text}

          {tabTotal !== undefined && tabTotal !== null && (
            <Div
              p="0.25rem"
              display="flex"
              alignItems="center"
              borderRadius="0.75rem"
              justifyContent="center"
              border="1px solid #9CA3AF1A"
              bg={tab === index ? '#B4C5FF33' : '#9CA3AF1A'}
              data-testid={`tab-total-${index}`}
              data-total={tabTotal}
            >
              <Span
                fontWeight="500"
                color="#9CA3AF"
                lineHeight="1rem"
                fontSize="0.75rem"
                fontFamily="Satoshi"
              >
                {tabTotal}
              </Span>
            </Div>
          )}
        </Button>
      );
    })}
  </>
);

export default Tabs;
