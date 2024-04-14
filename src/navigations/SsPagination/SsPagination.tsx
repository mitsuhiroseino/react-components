import Pagination from '@mui/material/Pagination';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsPaginationProps } from './types';

const SsPagination = forwardRef((props: SsPaginationProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Pagination ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsPagination.displayName = DISPLAY_NAME;
export default SsPagination;
