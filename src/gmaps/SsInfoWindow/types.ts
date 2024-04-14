import { InfoWindowProps } from '@react-google-maps/api';

/**
 * インフォウィンドウ
 */
export type SsInfoWindowProps = InfoWindowProps & {
  children?: any;
  Component?: any;
  ComponentProps?: any;
};
