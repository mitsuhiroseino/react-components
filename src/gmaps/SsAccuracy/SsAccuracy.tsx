import { ForwardedRef, forwardRef, useMemo } from 'react';

import SsCircle from '../SsCircle';
import { DISPLAY_NAME } from './constants';
import { SsAccuracyProps } from './types';

const DEFAULT_OPTIONS = {
  fillColor: '#0facf3',
  fillOpacity: 0.3,
  strokeWeight: 0,
  radius: 0,
  draggable: false,
  clickable: false,
  zIndex: 0,
};

/**
 * 位置情報の精度
 */
const SsAccuracy = forwardRef((props: SsAccuracyProps, ref: ForwardedRef<google.maps.Circle>) => {
  const { options, ...rest } = props,
    opts = useMemo(() => ({ ...DEFAULT_OPTIONS, ...options }), [options]);
  return <SsCircle ref={ref} {...rest} options={opts} />;
});
SsAccuracy.displayName = DISPLAY_NAME;
export default SsAccuracy;
