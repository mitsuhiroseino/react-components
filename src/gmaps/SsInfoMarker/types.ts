import { MarkerProps } from '@react-google-maps/api';

import { SsCardContentProps, SsCardProps } from '../../containers/SsCard';
import { SsInfoWindowProps } from '../SsInfoWindow';

/**
 * マーカー
 */
export type SsInfoMarkerProps = MarkerProps &
  SsCardContentProps & {
    infoWindow?: boolean;
    onInfoWindowOpen?: () => void;
    closeInfoWindow?: boolean;
    onInfoWindowClose?: () => void;
    InfoWindowProps?: SsInfoWindowProps;
    CardProps?: SsCardProps;
  };
