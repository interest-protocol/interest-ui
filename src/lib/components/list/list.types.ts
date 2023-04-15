import { StylinComponentProps } from '@stylin.js/react';
import { ReactNode } from 'react';

import { BoxElementProps } from '../../elements';

export interface ListProps extends StylinComponentProps, BoxElementProps {
  title: string;
  items: ReadonlyArray<ReactNode>;
}
