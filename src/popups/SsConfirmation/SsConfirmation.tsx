import Button from '@mui/material/Button';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import SsDialog from '../SsDialog';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsConfirmationProps } from './types';

const SsConfirmation = forwardRef((props: SsConfirmationProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    className,
    onOk,
    onClose,
    okLabel = 'OK',
    cancelLabel = 'Cancel',
    actions = (
      <>
        <Button onClick={onClose}>{cancelLabel}</Button>
        <Button onClick={onOk} autoFocus>
          {okLabel}
        </Button>
      </>
    ),
    ...rest
  } = props;

  return <SsDialog ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsConfirmation.displayName = DISPLAY_NAME;
export default SsConfirmation;
