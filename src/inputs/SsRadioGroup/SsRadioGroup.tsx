import RadioGroup from '@mui/material/RadioGroup';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsRadioGroupProps } from './types';

const SsRadioGroup = forwardRef((props: SsRadioGroupProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <RadioGroup ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsRadioGroup.displayName = DISPLAY_NAME;
export default SsRadioGroup;
