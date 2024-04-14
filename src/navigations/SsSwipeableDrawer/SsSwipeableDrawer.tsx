import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsSwipeableDrawerProps } from './types';

const SsSwipeableDrawer = forwardRef((props: SsSwipeableDrawerProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <SwipeableDrawer ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsSwipeableDrawer.displayName = DISPLAY_NAME;
export default SsSwipeableDrawer;
