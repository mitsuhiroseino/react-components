import { GeolocationItem, LatLng } from '../../types';
import { SsAccuracyProps } from '../SsAccuracy';
import { SsHeadingProps } from '../SsHeading';
import { SsPointProps } from '../SsPoint';

/**
 * プロパティ
 */
export type SsPositionProps = SsPointProps &
  GeolocationItem<google.maps.LatLng | google.maps.LatLngLiteral | LatLng> & {
    /**
     * 位置の精度を表示
     */
    accuracyVisible?: boolean;

    /**
     * 位置の精度のプロパティ
     */
    accuracyProps?: SsAccuracyProps;

    /**
     * 向きを表示
     */
    headingVisible?: boolean;

    /**
     * 向きのプロパティ
     */
    headingProps?: SsHeadingProps;
  };
