import { Theme } from '../../theme';

export const getLabel = (labels: string | [string, string], value: boolean) => {
  if (Array.isArray(labels)) return labels[Number(value)];

  return labels;
};

export const getBackground = (switcher: boolean, dark: boolean): string => {
  const colors: Theme['colors'];
  if (switcher) return colors.onSurface;

  if (dark) return colors.surface.container;

  return colors.onSurface;
};
