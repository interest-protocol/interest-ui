import { Div } from '@stylin.js/elements';
import React, { FC, useState } from 'react';

import { RadioButtonProps } from './radio-button.types';

const RadioButton: FC<RadioButtonProps> = ({
  selected,
  onClick,
  size = '1.25rem',
  innerSize = '0.625rem',
  color = '#B4C5FF',
  disabled,
}) => {
  const [currentSelect, setCurrentSelect] = useState(selected);

  const handleClick = () => {
    if (disabled) return;

    setCurrentSelect(!currentSelect);
    onClick?.();
  };

  return (
    <Div
      width={size}
      height={size}
      display="flex"
      borderRadius="50%"
      alignItems="center"
      onClick={handleClick}
      justifyContent="center"
      border={`2px solid ${disabled ? '#E2E2E63D' : color}`}
      transition="all 0.15s ease-in-out"
      bg={currentSelect ? (disabled ? '#E2E2E63D' : color) : 'transparent'}
      cursor={disabled ? 'not-allowed' : 'pointer'}
      data-testid="radio-button"
      data-selected={currentSelect}
    >
      {currentSelect && (
        <Div
          bg="#FFFFFF"
          width={innerSize}
          height={innerSize}
          borderRadius="50%"
          data-testid="radio-button-inner"
        />
      )}
    </Div>
  );
};

export default RadioButton;
