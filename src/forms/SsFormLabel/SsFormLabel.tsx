import FormLabel from '@mui/material/FormLabel';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsFormLabelProps } from './types';

const SsFormLabel = forwardRef((props: SsFormLabelProps, ref: ForwardedRef<HTMLLabelElement>) => {
  const { className, ...rest } = props;
  return <FormLabel ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsFormLabel.displayName = DISPLAY_NAME;
export default SsFormLabel;
