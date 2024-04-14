import ToggleButton from '@mui/material/ToggleButton';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsToggleButtonProps } from './types';

const SsToggleButton = forwardRef((props: SsToggleButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const { className, ...rest } = props;
  return <ToggleButton ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsToggleButton.displayName = DISPLAY_NAME;
export default SsToggleButton;
