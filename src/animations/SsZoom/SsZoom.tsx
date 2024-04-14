import Zoom from '@mui/material/Zoom';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsZoomProps } from './types';

const SsZoom = forwardRef((props: SsZoomProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Zoom ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsZoom.displayName = DISPLAY_NAME;
export default SsZoom;
