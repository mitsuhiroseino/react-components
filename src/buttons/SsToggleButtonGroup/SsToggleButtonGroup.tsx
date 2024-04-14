import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsToggleButtonGroupProps } from './types';

const SsToggleButtonGroup = forwardRef((props: SsToggleButtonGroupProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <ToggleButtonGroup ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsToggleButtonGroup.displayName = DISPLAY_NAME;
export default SsToggleButtonGroup;
