import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsToggleProps } from './types';

const Label = styled(FormControlLabel)({
  justifyContent: 'space-between',
});

const SsToggle = forwardRef((props: SsToggleProps | any, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, value: checked, ...rest } = props;
  return <Label ref={ref} {...rest} className={clsx(CLASS_NAME, className)} checked={checked} control={<Switch />} />;
});
SsToggle.displayName = DISPLAY_NAME;
export default SsToggle;
