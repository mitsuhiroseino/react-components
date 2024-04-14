import useForwardedRef from '@visue/react-core/hooks/useForwardedRef';
import useValueAnimation, {
  DIRECTION_TYPE,
  UseValueAnimationOptions,
  UseValueAnimationState,
} from '@visue/react-core/hooks/useValueAnimation';
import isString from 'lodash/isString';
import { ForwardedRef, forwardRef, useCallback, useMemo } from 'react';

import SsMarker from '../SsMarker';
import { DISPLAY_NAME } from './constants';
import { SsPointProps } from './types';

const MIN_SCALE = 9,
  MAX_SCALE = 10,
  SCALE_DIFF = MAX_SCALE - MIN_SCALE,
  MIN_STROKE_WEIGHT = 3,
  MAX_STROKE_WEIGHT = 4,
  STROKE_WEIGHT_DIFF = MIN_STROKE_WEIGHT - MAX_STROKE_WEIGHT,
  DEFAULT_ICON = {
    path: 0, // google.maps.SymbolPath.CIRCLE
    fillColor: '#0facf3',
    fillOpacity: 1,
    scale: MIN_SCALE, // 9 -> 10 -> 9 -> 10 -> ...
    strokeColor: '#ffffff',
    strokeWeight: MAX_STROKE_WEIGHT, // 4 -> 3 -> 4 -> 3 -> ...
    zIndex: 100,
  } as const,
  // 値算出関数
  CALC_VALUE = (value: google.maps.Symbol, state: UseValueAnimationState, options: UseValueAnimationOptions) => {
    const progress = state.progress,
      // スケールの値を算出
      scale = MIN_SCALE + SCALE_DIFF * progress,
      // ストローク幅の値を算出
      strokeWeight = MAX_STROKE_WEIGHT + STROKE_WEIGHT_DIFF * progress;
    // 2つの値を更新したものを返す
    return { ...value, scale, strokeWeight };
  },
  DEFAULT_ICON_ANIMATION_OPTIONS: UseValueAnimationOptions = {
    timingFunction: 'easeInOutSine',
    duration: 1600,
    direction: DIRECTION_TYPE.ALTERNATE,
  };

/**
 * 現在位置を表すマーカー
 */
const SsPosition = forwardRef((props: SsPointProps, ref: ForwardedRef<google.maps.Marker>) => {
  const [setter, instanceRef] = useForwardedRef(ref),
    { iconAnimation, iconAnimationOptions, icon, ...rest } = props,
    icn = useMemo(() => {
      if (!isString(icon)) {
        return { ...DEFAULT_ICON, ...icon };
      } else {
        return { ...DEFAULT_ICON };
      }
    }, [icon]),
    // アイコンのアニメーション
    setIcon = useCallback((newIcon) => {
      const instance = instanceRef.current;
      if (instance) {
        instance.setIcon(newIcon);
      }
    }, []),
    _icon = useValueAnimation(icn, iconAnimation, {
      calcValue: CALC_VALUE,
      ...DEFAULT_ICON_ANIMATION_OPTIONS,
      ...iconAnimationOptions,
      setValue: setIcon,
      enableNoInitialValue: true,
    });

  return <SsMarker ref={setter} {...rest} icon={_icon} />;
});
SsPosition.displayName = DISPLAY_NAME;
export default SsPosition;
