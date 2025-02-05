import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import React from 'react';

import { Box } from '../../elements';
import { TooltipProps } from './tooltip.types';

export const TooltipWrapper: FC<PropsWithChildren<TooltipProps>> = ({
  border,
  children,
  borderColor,
  tooltipContent,
  tooltipContentMaxWidth,
  ...props
}) => {
  const [toggle, setToggle] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const cursorPosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    cursorPosition.current = { x: event.clientX, y: event.clientY };
    updateTooltipPosition();
  };

  const updateTooltipPosition = () => {
    if (tooltipRef.current) {
      tooltipRef.current.style.transform = `translate(${
        cursorPosition.current.x + 20
      }px, ${cursorPosition.current.y + 20}px)`;
    }
  };

  useEffect(() => {
    const animate = () => {
      if (toggle && tooltipRef.current) {
        updateTooltipPosition();
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, [toggle]);

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
      onMouseMove={handleMouseMove}
      aria-label="tooltipContainer"
    >
      {children}
      <Box
        top="0"
        left="0"
        role="tooltip"
        border={border}
        ref={tooltipRef}
        position="fixed"
        pointerEvents="none"
        borderRadius=".25rem"
        opacity={toggle ? 1 : 0}
        borderColor={borderColor}
        visibility={toggle ? 'visible' : 'hidden'}
        transition="opacity 0.2s, visibility 0.2s"
        {...props}
      >
        <Box
          p="0.5rem"
          textAlign="center"
          wordBreak="break-all"
          overflowWrap="break-word"
          maxWidth={tooltipContentMaxWidth ?? '20rem'}
        >
          {tooltipContent}
        </Box>
      </Box>
    </Box>
  );
};
export type { TooltipProps };
