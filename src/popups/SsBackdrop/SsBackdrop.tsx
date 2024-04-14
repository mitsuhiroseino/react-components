import Backdrop from '@mui/material/Backdrop';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsBackdropProps } from './types';

const SsBackdrop = forwardRef((props: SsBackdropProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Backdrop ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsBackdrop.displayName = DISPLAY_NAME;
export default SsBackdrop;
