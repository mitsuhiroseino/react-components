import { UseNumberAnimationOptions } from '@visue/react-core/hooks/useNumberAnimation';

import { SsMarkerProps } from '../SsMarker';

/**
 * 向きマーカー
 */
export type SsHeadingProps = SsMarkerProps & {
  /**
   * 向き
   * 0～360
   */
  heading?: number | null;

  /**
   * 向きのアニメーション有無
   */
  headingAnimation?: boolean;

  /**
   * 向きのアニメーションのオプション
   */
  headingAnimationOptions?: UseNumberAnimationOptions;
};
