import { UseValueAnimationOptions } from '@visue/react-core/hooks/useValueAnimation';

import { SsMarkerProps } from '../SsMarker';

/**
 * 位置マーカー
 */
export type SsPointProps = SsMarkerProps & {
  /**
   * iconのアニメーション有無
   */
  iconAnimation?: boolean;

  /**
   * iconのアニメーションのオプション
   */
  iconAnimationOptions?: UseValueAnimationOptions;
};
