import FormGroup from '@mui/material/FormGroup';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsFormGroupProps } from './types';

const SsFormGroup = forwardRef((props: SsFormGroupProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <FormGroup ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsFormGroup.displayName = DISPLAY_NAME;
export default SsFormGroup;
