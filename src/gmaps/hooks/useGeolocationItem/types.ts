import { UseGeolocationOptions } from '@visue/react-core/hooks/useGeolocation';

import { GeolocationItem } from '../../../types';

/**
 * オプション
 */
export type UseGeolocationItemOptions = UseGeolocationOptions & {
  /**
   * 位置情報の変更時
   * @param geolocation
   * @returns
   */
  onChange?: (geolocation: UseGeolocationItemResult) => void;
};

/**
 * 結果
 */
export type UseGeolocationItemResult = GeolocationItem;
