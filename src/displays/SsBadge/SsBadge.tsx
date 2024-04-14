import Badge from '@mui/material/Badge';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsBadgeProps } from './types';

const SsBadge = forwardRef((props: SsBadgeProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Badge ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsBadge.displayName = DISPLAY_NAME;
export default SsBadge;
