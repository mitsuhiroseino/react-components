import { FC } from 'react';

import { SsPolylineProps } from '../SsPolyline';
import { SsPositionProps } from '../SsPosition';

/**
 * プロパティ
 */
export type SsRouteProps<P = Omit<SsPositionProps, 'position'>> = SsPolylineProps & {
  /**
   * 位置の表示
   */
  positionVisible?: boolean;

  /**
   * 位置のプロパティ
   */
  positionProps: P;

  /**
   * 位置を表示するためのコンポーネント
   */
  PositionComponent?: FC<P>;
};
