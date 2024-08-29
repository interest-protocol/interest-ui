import stylin from '@stylin.js/react';
import React, {
  FC,
  forwardRef,
  PropsWithChildren,
  PropsWithRef,
  RefAttributes,
  useEffect,
  useId,
  useState,
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
  PropsWithRef<PropsWithChildren<DropdownButtonProps>>
> = forwardRef(
  (
    { label, title, children, Icon, selected, containerProps, ...props },
    ref
  ) => {
    const { colors } = useTheme() as Theme;
    const [isFocused, setIsFocused] = useState(selected || false);
    const [isOpen, setIsOpen] = useState(false);
    const BOX_ID = useId();

    useEffect(() => {
      setIsFocused(Boolean(selected));
    }, [selected]);

    const closeDropdown = (event: any) => {
      if (
        event?.path?.some((node: any) => node?.id == BOX_ID) ||
        event?.composedPath()?.some((node: any) => node?.id == BOX_ID)
      )
        return;

      setIsOpen(false);
    };

    const BoxRef = useClickOutsideListenerRef<HTMLDivElement>(closeDropdown);

    const handleDropdown = () => {
      setIsOpen(!isOpen);
      !selected && setIsFocused(true);
      props.onClick?.();
    };

    return (
      <Box
        id={BOX_ID}
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ref={BoxRef}
        position="relative"
      >
        <Box onClick={handleDropdown}>
          <DropdownButtonElement
            gap="xs"
            ref={ref}
            display="flex"
            height="2.5rem"
            cursor="pointer"
            alignItems="center"
            bg="lowestContainer"
            p={label ? 'xs' : '0'}
            pr={label ? 'm' : '0'}
            border={isFocused ? '4px solid' : '0'}
            borderRadius={label ? 'full' : 'xs'}
            width={label ? 'fit-content' : '2.5rem'}
            pl={label ? (Icon ? 'xs' : 'm') : 'unset'}
            justifyContent={label ? 'unset' : 'center'}
            onBlur={() => setIsFocused(selected || false)}
            transition="background-color 300ms ease-in-out"
            borderColor={isFocused ? colors.primary + '14' : 'transparent'}
            nActive={{ bg: colors.primary + '14', color: colors.onSurface }}
            nHover={{ bg: !isFocused ? colors.primary + '14' : 'transparent' }}
            {...props}
          >
            {Icon && (
              <Box
                display="flex"
                width="1.5rem"
                color="onSurface"
                alignItems="center"
                justifyContent="center"
              >
                {Icon}
              </Box>
            )}
            {label && (
              <>
                <Typography variant="label" size="large" color="onSurface">
                  {label}
                </Typography>

                <Box
                  display="flex"
                  color="onSurface"
                  alignItems="center"
                  width="fit-content"
                >
                  <ArrowBottomSecondarySVG
                    width="100%"
                    maxWidth="1.5rem"
                    maxHeight="1.5rem"
                  />
                </Box>
              </>
            )}
          </DropdownButtonElement>
        </Box>

        {isOpen && (
          <Motion
            zIndex={4}
            top="3.5rem"
            overflow="hidden"
            initial="closed"
            width="fit-content"
            border="1px solid"
            position="absolute"
            bg="lowestContainer"
            aria-label="dropdown"
            variants={wrapperVariants}
            borderColor="outlineVariant"
            animate={isOpen ? 'open' : 'closed'}
            pointerEvents={isOpen ? 'auto' : 'none'}
            boxShadow="0px 2px 4px -2px rgba(13, 16, 23, 0.04), 0px 4px 8px -2px rgba(13, 16, 23, 0.12)"
            {...containerProps}
          >
            {title && (
              <Box p="m" borderBottom="1px solid" borderColor="outlineVariant">
                <Typography variant="label" size="large" color="onSurface">
                  {title}
                </Typography>
              </Box>
            )}
            {children}
          </Motion>
        )}
      </Box>
    );
  }
);

DropdownButton.displayName = 'DropdownButton';
export * from './dropdown-button.types';
