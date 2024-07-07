import asArray from '@visue/utils/array/asArray';
import noop from 'lodash/noop';
import { useEffect, useMemo, useState } from 'react';

import SsMarker from '../SsMarker';
import { DISPLAY_NAME } from './constants';
import { SsMarkersProps } from './types';

const SsMarkers = (props: SsMarkersProps) => {
  const { value, onInfoWindowOpen = noop, onInfoWindowClose = noop, closeInfoWindow, ...rest } = props,
    items = useMemo(() => asArray(value), [value]),
    [activeInfoWindow, setActiveInfoWindow] = useState({} as any),
    openHandlers = useMemo(() => {
      return items.map((item, i) => {
        return () => {
          setActiveInfoWindow(i);
          onInfoWindowOpen(item);
        };
      });
    }, [items]),
    closeHandlers = useMemo(() => {
      return items.map((item, i) => {
        return () => {
          onInfoWindowClose(item);
        };
      });
    }, [items]);

  useEffect(() => {
    if (closeInfoWindow && activeInfoWindow != null) {
      setActiveInfoWindow(null);
      onInfoWindowClose(items[activeInfoWindow]);
    }
  }, [closeInfoWindow]);

  return (
    <>
      {items.map((item, i) => {
        const { lat, lng, ...other } = item;
        return (
          <SsMarker
            key={i}
            {...rest}
            {...other}
            position={{ lat, lng }}
            onInfoWindowOpen={openHandlers[i]}
            onInfoWindowClose={closeHandlers[i]}
            closeInfoWindow={activeInfoWindow !== i}
          />
        );
      })}
    </>
  );
};
SsMarkers.displayName = DISPLAY_NAME;
export default SsMarkers;
