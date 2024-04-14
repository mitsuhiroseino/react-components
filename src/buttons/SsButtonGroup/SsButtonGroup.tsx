import ButtonGroup from '@mui/material/ButtonGroup';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsButtonGroupProps } from './types';

const SsButtonGroup = forwardRef((props: SsButtonGroupProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <ButtonGroup ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsButtonGroup.displayName = DISPLAY_NAME;
export default SsButtonGroup;
