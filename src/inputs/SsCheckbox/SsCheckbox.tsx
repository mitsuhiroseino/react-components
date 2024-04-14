import Checkbox from '@mui/material/Checkbox';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import SsFormControlLabel from '../../forms/SsFormControlLabel';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsCheckboxProps } from './types';

const SsCheckbox = forwardRef((props: SsCheckboxProps, ref?: ForwardedRef<HTMLDivElement>) => {
  const { className, label, value: checked, FormControlLabelProps, ...rest } = props;
  return (
    <SsFormControlLabel
      ref={ref as any}
      {...FormControlLabelProps}
      label={label}
      className={clsx(CLASS_NAME, className)}
      checked={checked}
      control={<Checkbox {...rest} />}
    />
  );
});
SsCheckbox.displayName = DISPLAY_NAME;
export default SsCheckbox;
