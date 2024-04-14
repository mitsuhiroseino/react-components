import Modal from '@mui/material/Modal';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsModalProps } from './types';

const SsModal = forwardRef((props: SsModalProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Modal ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsModal.displayName = DISPLAY_NAME;
export default SsModal;
