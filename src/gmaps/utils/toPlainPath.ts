import toPlainPosition from './toPlainPosition';

export default function toPlainPath(
  path: google.maps.MVCArray<google.maps.LatLng> | google.maps.LatLng[] | google.maps.LatLngLiteral[] | undefined,
): google.maps.LatLngLiteral[] {
  if (!path) {
    path = [];
  } else if (path instanceof google.maps.MVCArray) {
    path = path.getArray();
  }
  return path.map((position) => toPlainPosition(position));
}
