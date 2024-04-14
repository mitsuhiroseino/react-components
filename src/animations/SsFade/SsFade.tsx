import Fade from '@mui/material/Fade';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsFadeProps } from './types';

const SsFade = forwardRef((props: SsFadeProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Fade ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsFade.displayName = DISPLAY_NAME;
export default SsFade;
