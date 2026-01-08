import type { TAG_TYPE } from './tag.types';

export const TAG_COLOR: Record<TAG_TYPE, Record<'color' | 'bg', string>> = {
  curve: {
    bg: '#8888FF33',
    color: '#8888FF',
  },
  stable: {
    bg: '#FFAAAA33',
    color: '#FFAAAA',
  },
  earn: {
    bg: '#157F3D33',
    color: '#157F3D',
  },
  success: {
    bg: '#34D39933',
    color: '#34D399',
  },
  staked: {
    bg: '#9CA3AF33',
    color: '#9CA3AF',
  },
  volatile: {
    bg: '#EF444433',
    color: '#EF4444',
  },
};
