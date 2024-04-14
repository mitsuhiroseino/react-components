import FormControl from '@mui/material/FormControl';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsFormControlProps } from './types';

const SsFormControl = forwardRef((props: SsFormControlProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <FormControl ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsFormControl.displayName = DISPLAY_NAME;
export default SsFormControl;
