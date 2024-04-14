import Select from '@mui/material/Select';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsSelectProps } from './types';

const SsSelect = forwardRef((props: SsSelectProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Select ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsSelect.displayName = DISPLAY_NAME;
export default SsSelect;
