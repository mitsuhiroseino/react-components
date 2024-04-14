import Box from '@mui/material/Box';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsBoxProps } from './types';

const SsBox = forwardRef((props: SsBoxProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Box ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsBox.displayName = DISPLAY_NAME;
export default SsBox;
