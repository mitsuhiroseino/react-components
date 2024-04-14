import Grid from '@mui/material/Grid';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsGridProps } from './types';

const SsGrid = forwardRef((props: SsGridProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Grid ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsGrid.displayName = DISPLAY_NAME;
export default SsGrid;
