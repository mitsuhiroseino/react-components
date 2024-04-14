import Stack from '@mui/material/Stack';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsStackProps } from './types';

const SsStack = forwardRef((props: SsStackProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Stack ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsStack.displayName = DISPLAY_NAME;
export default SsStack;
