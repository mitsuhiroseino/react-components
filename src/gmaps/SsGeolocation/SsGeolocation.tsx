import { useGoogleMap } from '@react-google-maps/api';
import { forwardRef, useEffect, useRef } from 'react';

import useGeolocationItem from '../../hooks/useGeolocationItem';
import SsPosition from '../SsPosition';
import { DISPLAY_NAME } from './constants';
import { SsGeolocationProps } from './types';

/**
 * geolocationを取得し地図上に現在位置を描画する
 */
const SsGeolocation = forwardRef((props: SsGeolocationProps, ref: any) => {
  const { toCenter, getlocationOptions, ...rest } = props,
    map = useGoogleMap(),
    geolocation = useGeolocationItem(getlocationOptions),
    centerRef = useRef<any>();

  useEffect(() => {
    if (map && centerRef.current !== toCenter && geolocation) {
      // 現在位置を中心に表示
      centerRef.current = toCenter;
      map.setCenter(geolocation.position as google.maps.LatLngLiteral);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, toCenter]);

  return geolocation ? <SsPosition ref={ref} {...rest} {...(geolocation as any)} /> : null;
});
SsGeolocation.displayName = DISPLAY_NAME;
export default SsGeolocation;
