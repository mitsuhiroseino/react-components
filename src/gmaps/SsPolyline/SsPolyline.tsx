import { PolylineF } from '@react-google-maps/api';
import { ForwardedRef, forwardRef, useCallback, useMemo } from 'react';

import usePathAnimation from '../hooks/usePathAnimation';
import useGmapApi from '../useGmapApi';
import { DISPLAY_NAME } from './constants';
import { SsPolylineProps } from './types';

const DEFAULT_OPTIONS = {
  strokeWeight: 3,
  strokeColor: '#0facf3',
  strokeOpacity: 0.8,
  geodesic: true,
  editable: false,
  draggable: false,
  clickable: true,
  zIndex: 1,
} as const;

/**
 * ポリライン
 */
const SsPolyline = forwardRef((props: SsPolylineProps, ref: ForwardedRef<google.maps.Polyline>) => {
  const [apiProps, instanceRef] = useGmapApi(props, ref),
    { pathAnimation, pathAnimationOptions, pathAnimationType = 'entire', path, options, ...rest } = apiProps,
    opts = useMemo(() => ({ ...DEFAULT_OPTIONS, ...options }), [options]),
    // パスのアニメーション
    setPath = useCallback((newPath) => {
      const instance = instanceRef.current;
      if (instance) {
        instance.setPath(newPath);
      }
    }, []),
    _path = usePathAnimation(path, pathAnimation, {
      pathAnimationType,
      ...pathAnimationOptions,
      setValue: setPath,
    });

  return <PolylineF {...rest} path={_path} options={opts} />;
});
SsPolyline.displayName = DISPLAY_NAME;
export default SsPolyline;
