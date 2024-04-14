import { MarkerProps } from '@react-google-maps/api';
import { RunWithProgressOptions } from '@visue/web-core/utils/function/runWithProgress';

import { LatLng } from '../../types';

/**
 * マーカー
 */
export type SsMarkerProps = Omit<MarkerProps, 'position'> &
  LatLng & {
    /**
     * 位置情報
     */
    position?: google.maps.LatLng | google.maps.LatLngLiteral;

    /**
     * position変更時のアニメーション有無
     */
    positionAnimation?: boolean;

    /**
     * radius変更時のアニメーションのオプション
     */
    positionAnimationOptions?: RunWithProgressOptions;
  };
