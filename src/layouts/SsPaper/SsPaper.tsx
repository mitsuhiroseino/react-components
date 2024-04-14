import Paper from '@mui/material/Paper';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsPaperProps } from './types';

const SsPaper = forwardRef((props: SsPaperProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Paper ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsPaper.displayName = DISPLAY_NAME;
export default SsPaper;
