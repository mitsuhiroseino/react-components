import FormHelperText from '@mui/material/FormHelperText';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsFormHelperTextProps } from './types';

const SsFormHelperText = forwardRef((props: SsFormHelperTextProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <FormHelperText ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsFormHelperText.displayName = DISPLAY_NAME;
export default SsFormHelperText;
