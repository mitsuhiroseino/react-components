import ErrorIcon from '@mui/icons-material/Error';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import Typography from '@mui/material/Typography';
import { keyframes, styled } from '@mui/system';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import clsx from 'clsx';
import { forwardRef, useMemo } from 'react';

import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsGoogleMapProps } from './types';

const wpFade = keyframes`
        0% {
            opacity: 1
        }
        100% {
            opacity: 0.2
        }
    `,
  MapIcon = styled(MapOutlinedIcon)({
    width: '30%',
    height: '30%',
    color: '#777',
    animation: `${wpFade} 1.0s infinite alternate ease-in-out`,
  }),
  LoadingErrorIcon = styled(ErrorIcon)({
    width: '30%',
    height: '30%',
    color: '#f00',
  }),
  Loading = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1 1 auto',
    background: `repeating-linear-gradient(
            135deg,
            #ddd 0px,
            #ddd 8px,
            #eee 8px,
            #eee 16px
        )`,
  });

const SsGoogleMap = forwardRef((props: SsGoogleMapProps, ref: any) => {
  const { className, googleMapsApiKey = '', ScriptProps = {}, ...rest } = props,
    { style, mapContainerStyle, ...mapProps } = rest,
    { width, height } = mapContainerStyle || {},
    loadingStyle = useMemo(() => ({ width, height }), [width, height]),
    { isLoaded, loadError } = useJsApiLoader(Object.assign({ googleMapsApiKey }, ScriptProps));

  return (
    <div
      ref={ref}
      className={clsx(CLASS_NAME, className)}
      style={{
        display: 'flex',
        justifyContent: 'stretch',
        alignItems: 'stretch',
        ...style,
      }}
    >
      {loadError ? (
        <Loading style={loadingStyle}>
          <LoadingErrorIcon />
          <Typography variant="h6" color="error">
            Error!
          </Typography>
        </Loading>
      ) : isLoaded ? (
        <GoogleMap {...mapProps} mapContainerStyle={mapContainerStyle} />
      ) : (
        <Loading style={loadingStyle}>
          <MapIcon />
        </Loading>
      )}
    </div>
  );
});
SsGoogleMap.displayName = DISPLAY_NAME;
export default SsGoogleMap;
