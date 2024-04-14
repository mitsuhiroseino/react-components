import { SsDialogProps } from '../SsDialog';

export type SsConfirmationProps = SsDialogProps & {
  okLabel?: string;
  cancelLabel?: string;
  onOk?: () => void;
  onClose?: () => void;
};
