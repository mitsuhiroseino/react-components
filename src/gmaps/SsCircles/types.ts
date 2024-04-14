import { SsCircleProps } from '../SsCircle';

export type SsCirclesProps = Omit<SsCircleProps, 'position'> & {
  value: any[];
};
