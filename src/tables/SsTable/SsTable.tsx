import Table from '@mui/material/Table';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsTableProps } from './types';

const SsTable = forwardRef((props: SsTableProps, ref: ForwardedRef<HTMLTableElement>) => {
  const { className, ...rest } = props;
  return <Table ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsTable.displayName = DISPLAY_NAME;
export default SsTable;
