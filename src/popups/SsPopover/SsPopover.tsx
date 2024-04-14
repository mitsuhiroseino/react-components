import Popover from '@mui/material/Popover';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsPopoverProps } from './types';

const SsPopover = forwardRef((props: SsPopoverProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Popover ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsPopover.displayName = DISPLAY_NAME;
export default SsPopover;
