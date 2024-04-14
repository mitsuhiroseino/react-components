import Alert from '@mui/material/Alert';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsAlertProps } from './types';

const SsAlert = forwardRef((props: SsAlertProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Alert ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsAlert.displayName = DISPLAY_NAME;
export default SsAlert;
