export const rgbToHex = (rgb: string): string => {
  const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.exec(rgb);
  return result
    ? `#${((1 << 24) + (+result[1] << 16) + (+result[2] << 8) + +result[3])
        .toString(16)
        .slice(1)}`.toUpperCase()
    : rgb;
};

export const convertREMtoPX = (currentValue: string): string => {
  if (typeof currentValue !== 'string' || !currentValue.endsWith('rem'))
    return '0px';

  const remValue = parseFloat(currentValue.replace('rem', '').trim());
  return `${isNaN(remValue) ? '0' : remValue * 16}px`;
};
