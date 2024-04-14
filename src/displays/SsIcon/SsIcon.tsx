import Icon from '@mui/material/Icon';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsIconProps } from './types';

const SsIcon = forwardRef((props: SsIconProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Icon ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsIcon.displayName = DISPLAY_NAME;
export default SsIcon;
