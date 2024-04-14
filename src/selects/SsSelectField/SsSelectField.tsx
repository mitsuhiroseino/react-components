import MenuItem, { MenuItemProps } from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import useOptions from '@visue/react-core/hooks/useOptions';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsSelectFieldProps } from './types';

const SsSelectField = forwardRef((props: SsSelectFieldProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, options, ...rest } = props,
    opts = useOptions<Pick<MenuItemProps, 'value'> & { label: string }>(options);

  return (
    <TextField ref={ref} className={clsx(CLASS_NAME, className)} select {...rest}>
      {opts.map((option, i) => {
        return (
          <MenuItem key={i} value={option.value}>
            {option.label}
          </MenuItem>
        );
      })}
    </TextField>
  );
});
SsSelectField.displayName = DISPLAY_NAME;
export default SsSelectField;
