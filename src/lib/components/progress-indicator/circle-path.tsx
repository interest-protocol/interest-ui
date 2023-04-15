import React, { FC } from 'react';

import { CirclePathProps } from './progress-indicator.types';

const CirclePath: FC<CirclePathProps> = ({ size }) => (
  <svg width="0" height="0">
    <clipPath id="clipPath">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d={`M${size / 2} ${size}C${size * 0.7761416667} ${size} ${size} ${
          size * 0.7761416667
        } ${size} ${size / 2}C${size} ${size * 0.2238575} ${
          size * 0.7761416667
        } 0 ${size / 2} 0C${size * 0.2238575} 0 0 ${size * 0.2238575} 0 ${
          size / 2
        }C0 ${size * 0.7761416667} ${size * 0.2238575} ${size} ${
          size / 2
        } ${size}ZM${size / 2} ${size * 0.8888888889}C${size * 0.7147777778} ${
          size * 0.8888888889
        } ${size * 0.8888888889} ${size * 0.7147777778} ${
          size * 0.8888888889
        } ${size / 2}C${size * 0.8888888889} ${size * 0.2852222222} ${
          size * 0.7147777778
        } ${size * 0.11111111} ${size / 2} ${size * 0.11111111}C${
          size * 0.2852222222
        } ${size * 0.11111111} ${size * 0.11111111} ${size * 0.2852222222} ${
          size * 0.11111111
        } ${size / 2}C${size * 0.11111111} ${size * 0.7147777778} ${
          size * 0.2852222222
        } ${size * 0.8888888889} ${size / 2} ${size * 0.8888888889}Z`}
      />
    </clipPath>
  </svg>
);

export default CirclePath;
