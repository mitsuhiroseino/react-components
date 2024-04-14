import Button from '@mui/material/Button';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsButtonProps } from './types';

const SsButton = forwardRef((props: SsButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const { className, ...rest } = props;
  return <Button ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsButton.displayName = DISPLAY_NAME;
export default SsButton;
