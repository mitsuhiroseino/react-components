import Chip from '@mui/material/Chip';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsChipProps } from './types';

const SsChip = forwardRef((props: SsChipProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Chip ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsChip.displayName = DISPLAY_NAME;
export default SsChip;
