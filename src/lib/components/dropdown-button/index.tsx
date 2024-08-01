import stylin from '@stylin.js/react';
import React, {
  FC,
  forwardRef,
  PropsWithRef,
  RefAttributes,
  useEffect,
  useId,
  useState,
} from 'react';
import { v4 } from 'uuid';

import { Box, ListItem, Motion, Theme, Typography, useTheme } from '../..';
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

export const DropdownButton: FC<PropsWithRef<DropdownButtonProps>> = forwardRef(
  ({ label, title, Icon, items, selected, ...props }, ref) => {
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
      <Box id={BOX_ID} ref={BoxRef} position="relative">
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
            pl={label ? (Icon ? 'xs' : 'm') : 'unset'}
            border={isFocused ? '4px solid' : '0'}
            borderRadius={label ? 'full' : 'xs'}
            width={label ? 'fit-content' : '2.5rem'}
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
                width="1.5rem"
                justifyContent="center"
                alignItems="center"
                display="flex"
              >
                {Icon}
              </Box>
            )}
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
        </Box>

        {isOpen && (
          <Motion
            top="3.5rem"
            aria-label="dropdown"
            zIndex={4}
            overflow="hidden"
            initial="closed"
            borderRadius={props.borderRadius || 's'}
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
            {title && (
              <Box p="m" borderBottom="1px solid" borderColor="outlineVariant">
                <Typography variant="label" size="large" color="onSurface">
                  {title}
                </Typography>
              </Box>
            )}
            {items.map((item) => (
              <ListItem
                pr="m"
                key={v4()}
                title={item.title}
                disabled={item.disabled}
                SuffixIcon={item.SuffixIcon}
                pl={item.PrefixIcon ? 'xs' : 'm'}
                cursor={item.disabled ? 'not-allowed' : 'pointer'}
                PrefixIcon={
                  item.PrefixIcon && <Box width="1.5rem">{item.PrefixIcon}</Box>
                }
              />
            ))}
          </Motion>
        )}
      </Box>
    );
  }
);

DropdownButton.displayName = 'DropdownButton';
export * from './dropdown-button.types';
