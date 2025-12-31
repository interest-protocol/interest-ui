import { Div, P, Span } from '@stylin.js/elements';
import React, { FC } from 'react';
import { v4 } from 'uuid';

import { TooltipChartProps } from './tooltip-charts.types';
import { formatMoney } from '../../../utils';

const TooltipChart: FC<TooltipChartProps> = ({
  label,
  title,
  active,
  payload,
  labelMap = {},
}) => {
  if (active && payload && payload.length) {
    return (
      <Div
        p="1rem"
        bg="#ffffff1a"
        borderRadius="1rem"
        width="max-content"
        backdropFilter="blur(12px)"
        border="1px solid #ffffff33"
        boxShadow="0 20px 25px #00000040"
        data-testid="tooltip-chart"
      >
        <Div
          display="flex"
          alignItems="center"
          gap="0.5rem"
          mb="0.75rem"
          fontWeight="700"
          data-testid="tooltip-title"
        >
          <P color="#fff" fontWeight="700" fontSize="1rem">
            {title ? `${title}: ${label}` : `${label}`}
          </P>
        </Div>

        {payload
          .filter(
            (item, index, self) =>
              index === self.findIndex((t) => t.name === item.name)
          )
          .map(({ color, value, name }, index) => {
            const displayName = labelMap[name] ?? name;

            return (
              <Div
                key={v4()}
                display="flex"
                justifyContent="space-between"
                data-testid={`payload-item-${index}`}
                data-payload-name={name}
              >
                <Div display="flex" alignItems="center" gap="0.5rem">
                  {color && !color.startsWith('url') && (
                    <Div
                      width="1rem"
                      height="1rem"
                      borderRadius="5px"
                      style={{ backgroundColor: color }}
                      data-testid={`color-indicator-${index}`}
                      data-color={color}
                    />
                  )}

                  <Span
                    color="#fff"
                    fontWeight="700"
                    fontFamily="Satoshi"
                    fontSize="0.875rem"
                    textTransform="capitalize"
                    data-testid={`payload-value-${name}`}
                    data-value={value}
                  >
                    {`${displayName}: ${formatMoney(value)}`}
                  </Span>
                </Div>
              </Div>
            );
          })}
      </Div>
    );
  }

  return null;
};

export default TooltipChart;
