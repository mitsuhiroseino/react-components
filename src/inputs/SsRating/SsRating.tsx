import Rating from '@mui/material/Rating';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsRatingProps } from './types';

const SsRating = forwardRef((props: SsRatingProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Rating ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsRating.displayName = DISPLAY_NAME;
export default SsRating;
