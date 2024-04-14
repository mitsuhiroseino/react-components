import { MarkerF } from '@react-google-maps/api';
import noop from 'lodash/noop';
import { ForwardedRef, forwardRef, useEffect, useMemo, useState } from 'react';

import SsCard from '../../containers/SsCard';
import SsInfoWindow from '../SsInfoWindow';
import useGmapApi from '../useGmapApi';
import { DISPLAY_NAME } from './constants';
import { SsInfoMarkerProps } from './types';

const SsMarker = forwardRef((props: SsInfoMarkerProps, ref: ForwardedRef<google.maps.Marker>) => {
  const [apiProps, instanceRef] = useGmapApi(props, ref),
    {
      InfoWindowProps,
      onClick = noop,
      position,
      CardProps,
      infoWindow,
      title,
      // subheader,
      // image,
      // imageHeight,
      // imageWidth,
      // description,
      // actions,
      onInfoWindowOpen = noop,
      closeInfoWindow,
      onInfoWindowClose = noop,
      ...rest
    } = apiProps,
    [isOpen, setOpen] = useState(false),
    handleClick: any = useMemo(() => {
      return infoWindow
        ? (event: google.maps.MapMouseEvent) => {
            // infoWindowが有効な場合
            onClick(event);
            const toggledValue = !isOpen;
            setOpen(toggledValue);
            if (toggledValue) {
              onInfoWindowOpen();
            } else {
              onInfoWindowClose();
            }
          }
        : (event: google.maps.MapMouseEvent) => {
            // infoWindowが無効な場合
            onClick(event);
          };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, onClick, infoWindow]),
    handleCloseClick: any = useMemo(() => {
      return infoWindow
        ? () => {
            setOpen(false);
            onInfoWindowClose();
          }
        : null;
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [infoWindow]);

  useEffect(() => {
    if (closeInfoWindow && isOpen) {
      // 外部からの指示でinfoWindowをクローズする
      setOpen(false);
      onInfoWindowClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closeInfoWindow]);

  return (
    <MarkerF title={title} position={position} {...rest} onClick={handleClick}>
      {isOpen ? (
        <SsInfoWindow
          position={position}
          {...InfoWindowProps}
          onCloseClick={handleCloseClick}
          Component={SsCard}
          ComponentProps={{
            variant: 'outlined',
            ...CardProps,
            ...{
              sx: { border: 'none' },
              title,
              // subheader,
              // image,
              // imageHeight,
              // imageWidth,
              // description,
              // actions,
            },
          }}
        />
      ) : null}
    </MarkerF>
  );
});
SsMarker.displayName = DISPLAY_NAME;
export default SsMarker;
