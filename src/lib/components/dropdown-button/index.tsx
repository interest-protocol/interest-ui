import stylin from '@stylin.js/react';
import React, {
  FC,
  FocusEvent,
  forwardRef,
  PropsWithChildren,
  PropsWithRef,
  RefAttributes,
  useId,
  useState,
  useTransition,
} from 'react';

import { Box, Motion, Theme, Typography, useTheme } from '../..';
import { wrapperVariants } from '../../constants/wrapper-variants';
import useClickOutsideListenerRef from '../../hooks/use-click-outside-listener-ref';
import { ArrowBottomSecondarySVG } from '../../icons';
import {
  DropdownButtonElementProps,
  DropdownButtonProps,
} from './dropdown-button.types';

const DropdownButtonElement = stylin<
  DropdownButtonElementProps & RefAttributes<unknown>
>('button')();

export const DropdownButton: FC<
  PropsWithChildren<PropsWithRef<DropdownButtonProps>>
> = forwardRef(
  ({ label, title, children, PrefixIcon, onBlur, onFocus, ...props }, ref) => {
    const { colors } = useTheme() as Theme;
    const [focus, setFocus] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [, startTransition] = useTransition();
    const BOX_ID = useId();

    const closeDropdown = (event: any) => {
      if (
        event?.path?.some((node: any) => node?.id == BOX_ID) ||
        event?.composedPath()?.some((node: any) => node?.id == BOX_ID)
      )
        return;

      setIsOpen(false);
    };

    const BoxRef = useClickOutsideListenerRef<HTMLDivElement>(closeDropdown);

    const handleFocus = (e: FocusEvent<HTMLButtonElement, Element>) => {
      if (!focus) startTransition(() => setFocus(true));

      onFocus?.(e);
    };

    const handleBlur = (e: FocusEvent<HTMLButtonElement, Element>) => {
      if (focus) startTransition(() => setFocus(false));

      onBlur?.(e);
    };

    const handleDropdown = () => {
      setIsOpen(!isOpen);
    };

    return (
      <Box
        id={BOX_ID}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={BoxRef}
      >
        <DropdownButtonElement
          gap="xs"
          ref={ref}
          display="flex"
          height="2.5rem"
          cursor="pointer"
          alignItems="center"
          onBlur={handleBlur}
          onFocus={handleFocus}
          p={label ? 'xs' : '0'}
          pr={label ? 'm' : '0'}
          onClick={handleDropdown}
          border={focus ? '4px solid' : '0'}
          borderRadius={label ? 'full' : 'xs'}
          width={label ? 'fit-content' : '2.5rem'}
          justifyContent={label ? 'unset' : 'center'}
          transition="background-color 300ms ease-in-out"
          bg={focus ? colors.primary + '14' : colors.lowestContainer}
          borderColor={focus ? colors.primary + '14' : 'transparent'}
          nHover={{ bg: !focus ? colors.primary + '14' : 'transparent' }}
          nActive={{ bg: colors.primary + '14', color: colors.onSurface }}
          {...props}
        >
          <Box
            width="1.5rem"
            justifyContent="center"
            alignItems="center"
            display="flex"
          >
            {PrefixIcon}
          </Box>
          {label && (
            <>
              <Typography variant="label" size="large" color="onSurface">
                {label}
              </Typography>
              <Box width="fit-content" alignItems="center" display="flex">
                <ArrowBottomSecondarySVG
                  maxWidth="1.5rem"
                  maxHeight="1.5rem"
                  width="100%"
                />
              </Box>
            </>
          )}
        </DropdownButtonElement>
        {isOpen && (
          <Motion
            mt="1rem"
            top="3rem"
            zIndex={4}
            overflow="hidden"
            initial="closed"
            borderRadius="s"
            width="fit-content"
            border="1px solid"
            position="absolute"
            bg="lowestContainer"
            variants={wrapperVariants}
            borderColor="outlineVariant"
            animate={isOpen ? 'open' : 'closed'}
            pointerEvents={isOpen ? 'auto' : 'none'}
            boxShadow="0px 2px 4px -2px rgba(13, 16, 23, 0.04), 0px 4px 8px -2px rgba(13, 16, 23, 0.12)"
          >
            <Box p="m" borderBottom="1px solid" borderColor="outlineVariant">
              <Typography variant="label" size="large" color="onSurface">
                {title}
              </Typography>
            </Box>
            {children}
          </Motion>
        )}
      </Box>
    );
  }
);

DropdownButton.displayName = 'DropdownButton';
export * from './dropdown-button.types';
