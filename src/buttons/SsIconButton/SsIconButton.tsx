import IconButton from '@mui/material/IconButton';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsIconButtonProps } from './types';

const SsIconButton = forwardRef((props: SsIconButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const { className, ...rest } = props;
  return <IconButton ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsIconButton.displayName = DISPLAY_NAME;
export default SsIconButton;
