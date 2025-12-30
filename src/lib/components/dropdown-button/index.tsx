import { Div, DivElementProps, P } from '@stylin.js/elements';
import { not } from 'ramda';
import React, { FC, useEffect, useRef, useState } from 'react';
import { v4 } from 'uuid';

import { DropdownOptionProps, DropdownProps } from './dropdown-button.types';
import { CaretDownSVG } from '../../icons';

const Dropdown: FC<DropdownProps> = ({
  options,
  onClick,
  isRounded,
  placeholder,
  defaultIndex,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState<
    DropdownOptionProps | undefined
  >(defaultIndex ? options[defaultIndex] : undefined);
  const ref = useRef<DivElementProps>(null);

  const handleVolumeFilter = (option: DropdownOptionProps) => {
    setCurrentOption(option);
    setIsOpen(not);
    onClick?.(option.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        ref.current &&
        !(ref.current as unknown as HTMLDivElement).contains(
          event.target as Node
        )
      )
        setIsOpen(false);
    };

    if (isOpen) document.addEventListener('mousedown', handleClickOutside);
    else document.removeEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <Div ref={ref} position="relative" data-testid="dropdown">
      <Div
        px="1rem"
        py="0.75rem"
        display="flex"
        gap="0.75rem"
        bg="#9CA3AF1A"
        cursor="pointer"
        alignItems="center"
        minWidth="8.375rem"
        width="fit-content"
        whiteSpace="nowrap"
        justifyContent="space-between"
        border="1px solid #9CA3AF1A"
        onClick={() => setIsOpen(not)}
        transition="all 250ms ease-in-out"
        borderRadius={isRounded ? '9999rem' : '0.75rem'}
        borderColor={isOpen ? '#B4C5FF' : '#9CA3AF1A'}
        nHover={{
          borderColor: '#B4C5FF',
        }}
        data-testid="dropdown-toggle"
      >
        <P
          fontSize="1rem"
          fontWeight="400"
          fontFamily="Satoshi"
          whiteSpace="nowrap"
          color={currentOption?.label ? '#fff' : '#6B7280'}
          data-testid="dropdown-label"
        >
          {currentOption?.label || placeholder || 'Select'}
        </P>
        <Div
          width="1rem"
          display="flex"
          flexShrink={0}
          flex="0 0 auto"
          height="1.25rem"
          alignItems="center"
          justifyContent="center"
          transition="transform 0.3s ease"
          transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
          data-testid="dropdown-caret"
        >
          <CaretDownSVG
            width="100%"
            maxWidth="1rem"
            color="#9CA3AF"
            maxHeight="1.25rem"
          />
        </Div>
      </Div>

      {isOpen && (
        <Div
          left="0"
          zIndex="10"
          width="fill-available"
          bg="#1F2937"
          overflow="hidden"
          position="absolute"
          borderRadius="0.75rem"
          top="calc(100% + 0.25rem)"
          boxShadow="0 4px 12px #00000033"
          data-testid="dropdown-menu"
        >
          {options.map(({ value, label }, index) => (
            <Div
              key={v4()}
              p="0.75rem"
              cursor="pointer"
              width="fill-available"
              fontSize="0.875rem"
              transition="all 0.2s ease"
              color={currentOption?.value === value ? '#B4C5FF' : '#E5E7EB'}
              bg={currentOption?.value === value ? '#374151' : 'transparent'}
              nHover={{
                bg: '#4B5563',
              }}
              onClick={() => handleVolumeFilter({ label, value })}
              data-testid={`dropdown-option-${index}`}
              data-value={value}
            >
              {label}
            </Div>
          ))}
        </Div>
      )}
    </Div>
  );
};

export default Dropdown;
