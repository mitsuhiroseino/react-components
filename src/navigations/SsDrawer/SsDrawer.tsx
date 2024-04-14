import Drawer from '@mui/material/Drawer';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsDrawerProps } from './types';

const SsDrawer = forwardRef((props: SsDrawerProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Drawer ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsDrawer.displayName = DISPLAY_NAME;
export default SsDrawer;
