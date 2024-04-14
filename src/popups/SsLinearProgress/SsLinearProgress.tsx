import LinearProgress from '@mui/material/LinearProgress';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsLinearProgressProps } from './types';

const SsLinearProgress = forwardRef((props: SsLinearProgressProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <LinearProgress ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsLinearProgress.displayName = DISPLAY_NAME;
export default SsLinearProgress;
