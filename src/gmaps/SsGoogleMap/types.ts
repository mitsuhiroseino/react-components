import { GoogleMapProps, LoadScriptProps } from '@react-google-maps/api';

/**
 * useJsApiLoaderのプロパティ
 */
export type SsLoadScriptProps = Omit<
  Partial<LoadScriptProps>,
  'children' | 'loadingElement' | 'onLoad' | 'onError' | 'onUnmount'
>;

/**
 * プロパティ
 */
export type SsGoogleMapProps = GoogleMapProps & {
  /**
   * CSSクラス
   */
  className?: string;

  /**
   * APIキー
   */
  googleMapsApiKey?: string;

  /**
   * useJsApiLoaderのプロパティ
   */
  ScriptProps?: SsLoadScriptProps;

  /**
   * スタイル
   */
  style?: any;
};
