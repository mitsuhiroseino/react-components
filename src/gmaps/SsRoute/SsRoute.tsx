import { forwardRef, useMemo } from 'react';

import SsPolyline from '../SsPolyline';
import SsPosition from '../SsPosition';
import toPlainPath from '../utils/toPlainPath';
import { DISPLAY_NAME } from './constants';
import { SsRouteProps } from './types';

const DEFAULT_OPTIONS = {
  strokeWeight: 2,
  strokeColor: '#0facf3',
  strokeOpacity: 0.8,
  geodesic: true,
  editable: false,
  draggable: false,
  clickable: true,
  zIndex: 1,
};

/**
 * ルート
 */
const SsRoute = forwardRef((props: SsRouteProps, ref: any) => {
  const { positionVisible, positionProps, PositionComponent = SsPosition, options, path, ...rest } = props,
    opts = useMemo(() => ({ ...DEFAULT_OPTIONS, ...options }), [options]),
    position = useMemo(() => {
      const positions = toPlainPath(path);
      return positions[positions.length - 1];
    }, [path]);

  return position ? (
    <>
      <SsPolyline ref={ref} {...rest} options={opts} />
      {positionVisible ? <PositionComponent {...positionProps} position={position} /> : null}
    </>
  ) : null;
});
SsRoute.displayName = DISPLAY_NAME;
export default SsRoute;
