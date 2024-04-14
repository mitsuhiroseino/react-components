import { UseGeolocationItemOptions, UseGeolocationItemResult } from '../../hooks/useGeolocationItem';
import { SsRouteProps } from '../SsRoute';

export type SsGeolocationTrackerProps = Omit<SsRouteProps, 'getlocationOptions'> & {
  /**
   * トラッキング無効
   */
  disableTracking?: boolean;

  /**
   * 位置情報取得に関するオプション
   */
  getlocationOptions?: Omit<UseGeolocationItemOptions, 'onChange'> & {
    onChange?: (path: UseGeolocationItemResult[]) => void;
  };
};
