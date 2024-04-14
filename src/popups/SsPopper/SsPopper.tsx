import Popper from '@mui/material/Popper';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsPopperProps } from './types';

const SsPopper = forwardRef((props: SsPopperProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Popper ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsPopper.displayName = DISPLAY_NAME;
export default SsPopper;
