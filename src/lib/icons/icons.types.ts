import { SVGAttributes } from 'react';

export interface SVGProps extends SVGAttributes<SVGSVGElement> {
  maxWidth: string;
  maxHeight: string;
}
