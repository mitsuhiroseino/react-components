import { SsGoogleMapProps } from '../../gmaps/SsGoogleMap';

/**
 * テスト用の Google Maps API Key
 */
export const GOOGLE_MAPS_API_KEY = 'AIzaSyAfs1kYkV2ok5svz86rspBLSu2-eF3T7zE';

/**
 * テスト用の位置情報
 */
export const POSITION = {
  TOKYO: {
    lat: 35.68102299850607,
    lng: 139.76726854634921,
  },
};

/**
 * テスト用の Google Maps プロパティ
 */
export const GOOGLE_MAPS_PROPS: SsGoogleMapProps = {
  googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  center: POSITION.TOKYO,
  zoom: 16,
  mapContainerStyle: {
    height: 600,
    width: '100%',
    flex: '1 1 auto',
  },
};
