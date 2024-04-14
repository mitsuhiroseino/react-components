import CircularProgress from '@mui/material/CircularProgress';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsCircularProgressProps } from './types';

const SsCircularProgress = forwardRef((props: SsCircularProgressProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <CircularProgress ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsCircularProgress.displayName = DISPLAY_NAME;
export default SsCircularProgress;
