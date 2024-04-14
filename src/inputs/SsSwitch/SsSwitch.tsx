import Switch from '@mui/material/Switch';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsSwitchProps } from './types';

const SsSwitch = forwardRef((props: SsSwitchProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const { className, ...rest } = props;
  return <Switch ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsSwitch.displayName = DISPLAY_NAME;
export default SsSwitch;
