export const getLabel = (labels: string | [string, string], value: boolean) => {
  if (Array.isArray(labels)) return labels[Number(value)];

  return labels;
};

export const getBackground = (switcher: boolean, dark: boolean): string => {
  if (switcher) return 'primary';

  if (dark) return 'background';

  return 'textSoft';
};
