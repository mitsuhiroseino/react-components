import BottomNavigation from '@mui/material/BottomNavigation';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsBottomNavigationProps } from './types';

const SsBottomNavigation = forwardRef((props: SsBottomNavigationProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <BottomNavigation ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsBottomNavigation.displayName = DISPLAY_NAME;
export default SsBottomNavigation;
