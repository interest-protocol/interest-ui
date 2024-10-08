import { Shadows } from '../theme.types';

export const shadows: Record<Shadows, string> = {
  'primary.xs': '0rem .0625rem .125rem 0rem rgba(6, 156, 223, 0.32)',
  'primary.s':
    '0rem .0625rem .125rem 0rem rgba(6, 156, 223, 0.16), 0rem .0625rem .1875rem 0rem rgba(6, 156, 223, 0.24)',
  'primary.m':
    '0rem .125rem .25rem -0.125rem rgba(2, 131, 197, 0.32), 0rem .25rem .5rem -0.125rem rgba(6, 156, 223, 0.24)',
  'primary.l':
    '0rem .25rem .5rem -0.25rem rgba(6, 156, 223, 0.20), 0rem .75rem 1.125rem -0.375rem rgba(6, 156, 223, 0.24)',
  'primary.xl':
    '0rem .5rem .625rem -0.375rem rgba(6, 156, 223, 0.16), 0rem 1.125rem 1.375rem -0.25rem rgba(6, 156, 223, 0.24)',
  'primary.2xl': '0rem 1.5rem 2.875rem -0.625rem rgba(0, 85, 255, 0.40)',
  'dropShadow.xs': '0rem .0625rem .125rem 0rem rgba(13, 16, 23, 0.06)',
  'dropShadow.s':
    '0rem .0625rem .125rem 0rem rgba(13, 16, 23, 0.04), 0rem .0625rem .1875rem 0rem rgba(13, 16, 23, 0.12)',
  'dropShadow.m':
    '0rem .125rem .25rem -0.125rem rgba(13, 16, 23, 0.04), 0rem .25rem .5rem -0.125rem rgba(13, 16, 23, 0.12)',
  'dropShadow.l':
    '0rem .25rem .5rem -0.25rem rgba(13, 16, 23, 0.04), 0rem .75rem 1.125rem -0.375rem rgba(13, 16, 23, 0.08)',
  'dropShadow.xl':
    '0rem .5rem .625rem -0.375rem rgba(13, 16, 23, 0.04), 0rem 1.125rem 1.375rem -0.25rem rgba(13, 16, 23, 0.08)',
  'dropShadow.2xl': '0rem 1.5rem 2.875rem -0.625rem rgba(13, 16, 23, 0.16)',
};
