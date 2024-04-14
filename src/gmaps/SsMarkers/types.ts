import { SsMarkerProps } from '../SsMarker';

export type SsMarkersProps = Omit<SsMarkerProps, 'position'> & {
  value: any[];
  infoWindow?: boolean;
  onInfoWindowOpen?: () => void;
  closeInfoWindow?: boolean;
  onInfoWindowClose?: () => void;
};
