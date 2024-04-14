import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, useMemo } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsTextFieldBaseProps } from './types';

/**
 *
 */
const SsTextFieldBase = forwardRef((props: SsTextFieldBaseProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, startIcon, endIcon, ...rest } = props;
  const InputProps = useMemo(
    () => ({
      startAdornment: startIcon ? <InputAdornment position="start">{startIcon}</InputAdornment> : null,
      endAdornment: endIcon ? <InputAdornment position="end">{endIcon}</InputAdornment> : null,
    }),
    [startIcon, endIcon],
  );

  return <TextField ref={ref} className={clsx(CLASS_NAME, className)} InputProps={InputProps} {...rest} />;
});
SsTextFieldBase.displayName = DISPLAY_NAME;
export default SsTextFieldBase;
