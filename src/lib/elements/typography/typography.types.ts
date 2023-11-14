import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes, RefAttributes } from 'react';

export type TypographyElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate' | 'content'
> &
  RefAttributes<unknown>;

export interface TypographyProps
  extends StylinComponentProps,
    TypographyElementProps {
  as?: keyof JSX.IntrinsicElements;
  variant:
    | 'PROTO_TITLE_1'
    | 'PROTO_TITLE_2'
    | 'PROTO_TITLE_3'
    | 'PROTO_TITLE_4'
    | 'PROTO_TITLE_5'
    | 'PROTO_TITLE_6'
    | 'PROTO_TITLE_7'
    | 'PROTO_TITLE_8'
    | 'PROTO_TITLE_9'
    | 'PROTO_TITLE_10'
    | 'SATOSHI_TITLE_1'
    | 'SATOSHI_TITLE_2'
    | 'SATOSHI_TITLE_3';
}
