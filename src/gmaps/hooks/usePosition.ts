import { useMemo } from 'react';

import toPosition from '../utils/toPosition';

export default function usePosition(
  lat: number | null | undefined,
  lng: number | null | undefined,
  position?: google.maps.LatLng | google.maps.LatLngLiteral,
): google.maps.LatLngLiteral | undefined {
  return useMemo(() => toPosition(lat, lng, position), [lat, lng, position]);
}
