import applyIf from '@visue/utils/function/applyIf';
import { forwardRef, useMemo, useState } from 'react';
import SsGeolocation from '../SsGeolocation';
import SsRoute from '../SsRoute';
import { UseGeolocationItemResult } from '../hooks/useGeolocationItem';
import { DISPLAY_NAME } from './constants';
import { SsGeolocationTrackerProps } from './types';

/**
 * geolocationを取得し地図上にこれまでの経路を描画する
 */
const SsGeolocationTracker = forwardRef((props: SsGeolocationTrackerProps, ref: any) => {
  const {
      disableTracking,
      getlocationOptions,
      positionVisible,
      positionProps,
      PositionComponent = SsGeolocation,
      ...rest
    } = props,
    [path, setPath] = useState([] as any[]),
    geoOptions: any = useMemo(() => {
      const { onChange, ...other } = getlocationOptions || {};
      return {
        ...other,
        onChange: (geolocationItem: UseGeolocationItemResult) => {
          const newPath = path.concat([geolocationItem.position]);
          setPath(newPath);
          applyIf(onChange, [newPath]);
        },
      };
    }, [path, getlocationOptions]),
    trackedPath = useMemo(() => (disableTracking ? [] : path), [disableTracking, path]);

  return (
    <SsRoute
      path={trackedPath}
      PositionComponent={PositionComponent}
      positionProps={geoOptions}
      pathAnimationType="difference"
      {...rest}
    />
  );
});
SsGeolocationTracker.displayName = DISPLAY_NAME;
export default SsGeolocationTracker;
