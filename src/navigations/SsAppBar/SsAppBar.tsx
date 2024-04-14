import AppBar from '@mui/material/AppBar';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsAppBarProps } from './types';

const SsAppBar = forwardRef((props: SsAppBarProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <AppBar ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsAppBar.displayName = DISPLAY_NAME;
export default SsAppBar;
