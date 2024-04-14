import Divider from '@mui/material/Divider';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsDividerProps } from './types';

const SsDivider = forwardRef((props: SsDividerProps, ref: ForwardedRef<HTMLHRElement>) => {
  const { className, ...rest } = props;
  return <Divider ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsDivider.displayName = DISPLAY_NAME;
export default SsDivider;
