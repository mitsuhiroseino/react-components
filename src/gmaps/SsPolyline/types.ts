import { PolylineProps } from '@react-google-maps/api';

import { UsePathAnimationOptions } from '../hooks/usePathAnimation';

/**
 * ポリライン
 */
export type SsPolylineProps = PolylineProps & {
  /**
   * path変更時のアニメーション有無
   */
  pathAnimation?: boolean;

  /**
   * path変更時のアニメーションのオプション
   */
  pathAnimationOptions?: UsePathAnimationOptions;

  /**
   *
   */
  pathAnimationType?: 'entire' | 'difference' | 'latest';
};
