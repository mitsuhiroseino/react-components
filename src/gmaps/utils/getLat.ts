import isFunction from 'lodash/isFunction';

export default function getLat(position: google.maps.LatLng | google.maps.LatLngLiteral) {
  const lat = position.lat;
  return isFunction(lat) ? lat() : lat;
}
