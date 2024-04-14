import Fab from '@mui/material/Fab';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsFabProps } from './types';

const SsFab = forwardRef((props: SsFabProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const { className, ...rest } = props;
  return <Fab ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsFab.displayName = DISPLAY_NAME;
export default SsFab;
