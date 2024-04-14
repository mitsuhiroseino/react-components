import FormControlLabel from '@mui/material/FormControlLabel';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsFormControlLabelProps } from './types';

const SsFormControlLabel = forwardRef((props: SsFormControlLabelProps, ref?: ForwardedRef<HTMLDivElement>) => {
  const { className, label, control = <></>, ...rest } = props;
  return (
    <FormControlLabel ref={ref} {...rest} className={clsx(CLASS_NAME, className)} label={label} control={control} />
  );
});
SsFormControlLabel.displayName = DISPLAY_NAME;
export default SsFormControlLabel;
