import useValueAnimation, {
  UseValueAnimationOptions,
  UseValueAnimationState,
} from '@visue/react-core/hooks/useValueAnimation';
import getDiff2D from '@visue/utils/coord/getDiff2D';

import getLat from '../../utils/getLat';
import getLng from '../../utils/getLng';

const DEFAULT_OPTIONS: UseValueAnimationOptions = {
    timingFunction: 'easeInOutCubic',
    duration: 1000,
    iterationCount: 1,
  } as const,
  LAT_KEY = 'lat',
  LNG_KEY = 'lng';

/**
 * 位置アニメーション用の値算出関数
 * @param value 値
 * @param state アニメーションの状態
 * @param options オプション
 * @returns
 */
const CALC_VALUE = (
  value: google.maps.LatLng | google.maps.LatLngLiteral,
  state: UseValueAnimationState,
  options: UseValueAnimationOptions,
) => {
  const { initialValue = { [LAT_KEY]: 0, [LNG_KEY]: 0 } } = options,
    diff = getDiff2D(
      initialValue,
      { [LAT_KEY]: getLat(value), [LNG_KEY]: getLng(value) },
      {
        xKeys: LNG_KEY,
        yKeys: LAT_KEY,
        xKey: LNG_KEY,
        yKey: LAT_KEY,
      },
    ),
    progress = state.progress;

  return {
    lat: initialValue[LAT_KEY] + diff[LAT_KEY] * progress,
    lng: initialValue[LNG_KEY] + diff[LNG_KEY] * progress,
  };
};

/**
 * 位置の変更時のアニメーションを行う
 * @param position 移動先の位置
 * @param isEnabled アニメーションの有効／無効
 * @param options オプション
 */
export default function usePositionAnimation(
  position: google.maps.LatLng | google.maps.LatLngLiteral | undefined,
  isEnabled: boolean | undefined,
  options: UseValueAnimationOptions = {},
): google.maps.LatLng {
  // 位置移動時のアニメーション
  return useValueAnimation(position, isEnabled, {
    ...DEFAULT_OPTIONS,
    ...options,
    calcValue: CALC_VALUE,
  }) as google.maps.LatLng;
}
