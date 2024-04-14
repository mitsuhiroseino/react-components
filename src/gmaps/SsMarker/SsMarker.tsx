import { Marker } from '@react-google-maps/api';
import { ForwardedRef, forwardRef, useCallback } from 'react';

import usePosition from '../hooks/usePosition';
import usePositionAnimation from '../hooks/usePositionAnimation';
import useGmapApi from '../useGmapApi';
import { DISPLAY_NAME } from './constants';
import { SsMarkerProps } from './types';

const SsMarker = forwardRef((props: SsMarkerProps, ref: ForwardedRef<google.maps.Marker>) => {
  const [apiProps, instanceRef] = useGmapApi(props, ref),
    { lat, lng, position, positionAnimation, positionAnimationOptions, ...rest } = apiProps,
    pos = usePosition(lat, lng, position),
    // 移動時のアニメーション
    setPosition = useCallback((newPosition) => {
      const instance = instanceRef.current;
      if (instance) {
        instance.setPosition(newPosition);
      }
    }, []),
    _position = usePositionAnimation(pos, positionAnimation, {
      ...positionAnimationOptions,
      setValue: setPosition,
    });

  return _position ? <Marker position={_position} {...rest} /> : null;
});
SsMarker.displayName = DISPLAY_NAME;
export default SsMarker;
