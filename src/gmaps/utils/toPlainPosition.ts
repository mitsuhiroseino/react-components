import getLat from './getLat';
import getLng from './getLng';

export default function toPlainPosition(
  position: google.maps.LatLng | google.maps.LatLngLiteral,
): google.maps.LatLngLiteral {
  return { lat: getLat(position), lng: getLng(position) };
}
