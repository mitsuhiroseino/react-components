import Snackbar from '@mui/material/Snackbar';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsSnackbarProps } from './types';

const SsSnackbar = forwardRef((props: SsSnackbarProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Snackbar ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsSnackbar.displayName = DISPLAY_NAME;
export default SsSnackbar;
