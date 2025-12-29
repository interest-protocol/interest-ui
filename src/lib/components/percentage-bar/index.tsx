import { v4 } from 'uuid';
import React, { FC } from 'react';
import { Div } from '@stylin.js/elements';
import { PercentageBarProps } from './percentage-bar.types';

export const PercentageBar: FC<PercentageBarProps> = ({
  total,
  balanceData,
}) => {
  if (!total || !balanceData || balanceData.length === 0) return null;

  return (
    <Div
      gap="0.2rem"
      width="100%"
      display="flex"
      height="0.875rem"
      overflow="hidden"
      borderRadius="1rem"
      data-testid="balance-bar"
    >
      {balanceData.map(({ balance }, index) => (
        <Div
          key={v4()}
          width={`${(balance / total) * 100}%`}
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="0.75rem"
          color={index === 0 ? '#FFFFFF' : '#000000'}
          background={index === 0 ? '#2774CA' : '#00B989'}
          data-testid={`balance-segment-${index}`}
          data-percentage={Math.round((balance / total) * 100)}
        >
          {((balance / total) * 100).toFixed(2)}%
        </Div>
      ))}
    </Div>
  );
};

export default PercentageBar;
