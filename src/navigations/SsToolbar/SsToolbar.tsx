import Toolbar from '@mui/material/Toolbar';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsToolbarProps } from './types';

const SsToolbar = forwardRef((props: SsToolbarProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Toolbar ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsToolbar.displayName = DISPLAY_NAME;
export default SsToolbar;
