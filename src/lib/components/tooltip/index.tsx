import { FC, PropsWithChildren, useState } from 'react';
import React from 'react';

import { Box, Motion } from '../../elements';
import { TooltipProps } from './tooltip.types';

export const TooltipWrapper: FC<PropsWithChildren<TooltipProps>> = ({
  border,
  children,
  borderColor,
  tooltipContent,
  tooltipPosition,
  ...props
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Box
      cursor="pointer"
      position="relative"
      onMouseEnter={() => {
        setToggle(true);
      }}
      onMouseLeave={() => {
        setToggle(false);
      }}
      aria-label="tooltipContainer"
    >
      {children}
      {toggle && (
        <Motion
          layout
          initial={{ opacity: 0.2 }}
          animate={{
            opacity: 1,
          }}
          role="tooltip"
          border={border}
          position="absolute"
          borderRadius=".25rem"
          borderColor={borderColor}
          transform={`translate(${
            tooltipPosition === 'top' || tooltipPosition === 'bottom'
              ? '-50%'
              : tooltipPosition === 'left'
              ? '-115%'
              : tooltipPosition === 'right'
              ? '115%'
              : '0'
          }, ${
            tooltipPosition === 'top'
              ? '-115%'
              : tooltipPosition === 'bottom'
              ? '115%'
              : tooltipPosition === 'left' || tooltipPosition === 'right'
              ? '-50%'
              : '0'
          })`}
          top={
            tooltipPosition === 'top'
              ? '0'
              : tooltipPosition === 'left' || tooltipPosition === 'right'
              ? '50%'
              : 'unset'
          }
          left={
            tooltipPosition === 'left'
              ? '0'
              : tooltipPosition === 'top' || tooltipPosition === 'bottom'
              ? '50%'
              : 'unset'
          }
          right={tooltipPosition === 'right' ? '0' : 'unset'}
          bottom={tooltipPosition === 'bottom' ? '0' : 'unset'}
          {...props}
        >
          <Box p=".5rem">{tooltipContent}</Box>
          <Box
            borderLeft={
              tooltipPosition === 'bottom' || tooltipPosition === 'right'
                ? border
                : 'unset'
            }
            borderBottom={
              tooltipPosition === 'top' || tooltipPosition === 'right'
                ? border
                : 'unset'
            }
            borderRight={
              tooltipPosition === 'top' || tooltipPosition === 'left'
                ? border
                : 'unset'
            }
            borderTop={
              tooltipPosition === 'bottom' || tooltipPosition === 'left'
                ? border
                : 'unset'
            }
            borderColor={borderColor}
            ml={
              tooltipPosition === 'top' || tooltipPosition === 'bottom'
                ? '50%'
                : 'unset'
            }
            bg="inherit"
            width=".375rem"
            height=".375rem"
            top={
              tooltipPosition === 'bottom'
                ? '-.2343rem'
                : tooltipPosition === 'left' || tooltipPosition === 'right'
                ? '50%'
                : 'unset'
            }
            left={tooltipPosition === 'right' ? '-.2343rem' : 'unset'}
            right={tooltipPosition === 'left' ? '-.2343rem' : 'unset'}
            bottom={
              tooltipPosition === 'top'
                ? '-.2343rem'
                : tooltipPosition === 'left' || tooltipPosition === 'right'
                ? '0'
                : 'unset'
            }
            position="absolute"
            transform={`translate(${
              tooltipPosition === 'top'
                ? '-50%'
                : tooltipPosition === 'left' || tooltipPosition === 'right'
                ? '0'
                : '-50%'
            }, ${
              tooltipPosition === 'top'
                ? '0'
                : tooltipPosition === 'left' || tooltipPosition === 'right'
                ? '-50%'
                : '0%'
            }) rotate(45deg)`}
          />
        </Motion>
      )}
    </Box>
  );
};
export type { TooltipProps };
