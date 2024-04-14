import useGeolocation from '@visue/react-core/hooks/useGeolocation';
import noop from 'lodash/noop';
import { useEffect, useState } from 'react';
import { UseGeolocationItemOptions, UseGeolocationItemResult } from './types';

export default function useGeolocationItem(options: UseGeolocationItemOptions = {}): UseGeolocationItemResult {
  const { onChange = noop, ...rest } = options,
    geolocation = useGeolocation(rest),
    [geolocationItemResult, setGeolocationItemResult] = useState<UseGeolocationItemResult>(null);

  useEffect(() => {
    let geo: UseGeolocationItemResult | null = null;
    if (geolocation) {
      const coords = geolocation.coords;
      geo = {
        position: {
          lat: coords.latitude,
          lng: coords.longitude,
        },
        accuracy: coords.accuracy,
        altitude: coords.altitude,
        altitudeAccuracy: coords.altitudeAccuracy,
        heading: coords.heading,
        speed: coords.speed,
        timestamp: geolocation.timestamp,
      };
    }
    onChange(geo);
    setGeolocationItemResult(geo);
  }, [geolocation]);

  return geolocationItemResult;
}
