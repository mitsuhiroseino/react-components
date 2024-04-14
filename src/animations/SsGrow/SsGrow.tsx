import Grow from '@mui/material/Grow';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsGrowProps } from './types';

const SsGrow = forwardRef((props: SsGrowProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Grow ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsGrow.displayName = DISPLAY_NAME;
export default SsGrow;
