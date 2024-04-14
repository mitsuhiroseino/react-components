import Skeleton from '@mui/material/Skeleton';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsSkeletonProps } from './types';

const SsSkeleton = forwardRef((props: SsSkeletonProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Skeleton ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsSkeleton.displayName = DISPLAY_NAME;
export default SsSkeleton;
