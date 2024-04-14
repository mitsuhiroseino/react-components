import SpeedDial from '@mui/material/SpeedDial';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsSpeedDialProps } from './types';

const SsSpeedDial = forwardRef((props: SsSpeedDialProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <SpeedDial ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsSpeedDial.displayName = DISPLAY_NAME;
export default SsSpeedDial;
