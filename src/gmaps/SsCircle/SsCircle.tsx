import { CircleF } from '@react-google-maps/api';
import useNumberAnimation, { UseNumberAnimationOptions } from '@visue/react-core/hooks/useNumberAnimation';
import { ForwardedRef, forwardRef, useCallback, useMemo } from 'react';

import usePosition from '../hooks/usePosition';
import usePositionAnimation from '../hooks/usePositionAnimation';
import useGmapApi from '../useGmapApi';
import { DISPLAY_NAME } from './constants';
import { SsCircleProps } from './types';

const DEFAULT_OPTIONS = {
    fillColor: '#0facf3',
    fillOpacity: 0.3,
    strokeWeight: 0,
    radius: 0,
    draggable: false,
    clickable: false,
    zIndex: 0,
  },
  DEFAULT_RADIUS_ANIMATION_OPTIONS: UseNumberAnimationOptions = {
    timingFunction: 'easeOutBack',
    duration: 1000,
    iterationCount: 1,
  };

/**
 * 円
 */
const SsCircle = forwardRef((props: SsCircleProps, ref: ForwardedRef<google.maps.Circle>) => {
  const [apiProps, instanceRef] = useGmapApi(props, ref),
    {
      lat,
      lng,
      center,
      centerAnimation,
      centerAnimationOptions,
      radius,
      radiusAnimation,
      radiusAnimationOptions,
      colorAnimation,
      colorAnimationOptions,
      options,
      ...rest
    } = apiProps,
    // 半径のアニメーション
    setRadius = useCallback((newRadius) => {
      const instance = instanceRef.current;
      if (instance) {
        instance.setRadius(newRadius);
      }
    }, []),
    _radius = useNumberAnimation(radius, radiusAnimation, {
      ...DEFAULT_RADIUS_ANIMATION_OPTIONS,
      ...radiusAnimationOptions,
      setValue: setRadius,
    }),
    // 移動時のアニメーション
    cntr = usePosition(lat, lng, center),
    setCenter = useCallback((newCenter) => {
      const instance = instanceRef.current;
      if (instance) {
        instance.setCenter(newCenter);
      }
    }, []),
    _center = usePositionAnimation(cntr, centerAnimation, {
      ...centerAnimationOptions,
      setValue: setCenter,
    }),
    opts = useMemo(() => ({ ...DEFAULT_OPTIONS, ...options }), [options]);

  return _center ? <CircleF {...rest} center={_center} radius={_radius} options={opts} /> : null;
});
SsCircle.displayName = DISPLAY_NAME;
export default SsCircle;
