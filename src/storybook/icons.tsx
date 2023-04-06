import { always } from 'ramda';
import React, { FC } from 'react';

export const SwapIcon: FC = () =>(
  <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
    <path
      d="M13.875 9.25H16.5L13.5 12.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M1.5 9.25H15.375"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M5.25 4.75H1.5L4.5 1.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M16.5 4.75H2.625"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export const PlusIcon: FC = () =>(
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path
      d="M13.6666 7.83333H7.83331V13.6667H6.16665V7.83333H0.333313V6.16666H6.16665V0.333328H7.83331V6.16666H13.6666V7.83333Z"
      fill="currentColor"
    />
  </svg>
);
