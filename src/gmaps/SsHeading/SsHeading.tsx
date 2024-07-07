import useForwardedRef from '@visue/react-core/hooks/useForwardedRef';
import useValueAnimation, {
  UseValueAnimationOptions,
  UseValueAnimationState,
} from '@visue/react-core/hooks/useValueAnimation';
import clamp, { CLAMP_MODE } from '@visue/utils/number/clamp';
import isString from 'lodash/isString';
import { ForwardedRef, forwardRef, useCallback, useMemo } from 'react';

import SsMarker from '../SsMarker';
import { DISPLAY_NAME } from './constants';
import { SsHeadingProps } from './types';

const DEFAULT_ICON: google.maps.Symbol = {
    path: 'M 0,-4 2.4,0 -2.4,0 z',
    fillColor: '#0facf3',
    fillOpacity: 1,
    strokeWeight: 0,
    scale: 3,
    rotation: 0,
    anchor: { x: 0, y: 4 } as any,
  } as const,
  // 値算出関数
  CALC_VALUE = (value: number, state: UseValueAnimationState, options: UseValueAnimationOptions) => {
    const { initialValue = 0 } = options,
      diff = value - initialValue,
      newRotation = clamp(initialValue + diff * state.progress, 0, 360, {
        minClampMode: CLAMP_MODE.WRAP,
        maxClampMode: CLAMP_MODE.WRAP,
      });
    return newRotation;
  },
  CREATE_TO_STATE = (icon: google.maps.Symbol) => (value: number) => {
    return { ...icon, rotation: value };
  },
  DEFAULT_HEADING_ANIMATION_OPTIONS: UseValueAnimationOptions = {
    timingFunction: 'easeInOutQuad',
    duration: 1000,
    iterationCount: 1,
  };

/**
 * 向きを表すマーカー
 */
const SsHeading = forwardRef((props: SsHeadingProps, ref: ForwardedRef<google.maps.Marker>) => {
  const [setter, instanceRef] = useForwardedRef(ref),
    { heading, headingAnimation, headingAnimationOptions, icon, ...rest } = props,
    // アイコンの向きのアニメーション
    setIcon = useCallback((newIcon) => {
      const instance = instanceRef.current;
      if (instance) {
        instance.setIcon(newIcon);
      }
    }, []),
    icn = useMemo(() => {
      if (!isString(icon)) {
        return { ...DEFAULT_ICON, ...icon, rotation: heading };
      } else {
        return { ...DEFAULT_ICON, rotation: heading };
      }
    }, [icon, heading]),
    convert = useMemo(() => CREATE_TO_STATE(icn), [icn]),
    _icon = useValueAnimation(heading, headingAnimation, {
      ...DEFAULT_HEADING_ANIMATION_OPTIONS,
      ...headingAnimationOptions,
      calcValue: CALC_VALUE,
      setValue: setIcon,
      convert,
      initialValue: 0,
    });

  return heading != null ? <SsMarker ref={setter} {...rest} icon={_icon} /> : null;
});
SsHeading.displayName = DISPLAY_NAME;
export default SsHeading;
