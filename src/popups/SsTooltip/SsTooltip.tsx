import Tooltip from '@mui/material/Tooltip';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsTooltipProps } from './types';

const SsTooltip = forwardRef((props: SsTooltipProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Tooltip ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsTooltip.displayName = DISPLAY_NAME;
export default SsTooltip;
