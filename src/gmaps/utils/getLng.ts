import isFunction from 'lodash/isFunction';

export default function getLng(position: google.maps.LatLng | google.maps.LatLngLiteral) {
  const lng = position.lng;
  return isFunction(lng) ? lng() : lng;
}
