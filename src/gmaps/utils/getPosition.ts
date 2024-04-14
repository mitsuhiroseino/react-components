import toPlainPosition from './toPlainPosition';

export default function getPosition(
  path: google.maps.MVCArray<google.maps.LatLng> | google.maps.LatLng[] | google.maps.LatLngLiteral[],
  index: number,
): google.maps.LatLngLiteral | undefined {
  let position;
  if (path instanceof google.maps.MVCArray) {
    position = path.getAt(index);
  } else {
    position = path[index];
  }
  return toPlainPosition(position);
}
