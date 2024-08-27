import { GeolocationItem } from '../../types';
import { SsPositionProps } from '../SsPosition';
import { UseGeolocationItemOptions } from '../hooks/useGeolocationItem';

/**
 * プロパティ
 */
export type SsGeolocationProps = Omit<SsPositionProps, keyof GeolocationItem> & {
  /**
   * 現在位置まで地図の中心を移動する
   */
  toCenter?: any;

  /**
   * 位置情報取得に関するオプション
   */
  getlocationOptions?: UseGeolocationItemOptions;
};
