import toPlainPosition from './toPlainPosition';

export default function toPosition(
  lat: number | null | undefined,
  lng: number | null | undefined,
  position?: google.maps.LatLng | google.maps.LatLngLiteral,
): google.maps.LatLngLiteral | undefined {
  if (position) {
    return toPlainPosition(position);
  } else if (lat != null && lng != null) {
    return { lat, lng };
  } else {
    return;
  }
}
