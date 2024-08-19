export const rgbToHex = (rgb: string): string => {
  const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.exec(rgb);
  return result
    ? `#${((1 << 24) + (+result[1] << 16) + (+result[2] << 8) + +result[3])
        .toString(16)
        .slice(1)}`.toUpperCase()
    : rgb;
};

export const convertREMtoPX = (value: number): number => {
  if (value === 0) return 0;
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error('Invalid value form REM. It must be a number');
  }
  if (value <= 0) {
    throw new Error('It must be a positive number');
  }
  const remValue = value * 16;
  return remValue;
};
