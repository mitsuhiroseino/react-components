import Radio from '@mui/material/Radio';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsRadioProps } from './types';

const SsRadio = forwardRef((props: SsRadioProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const { className, ...rest } = props;
  return <Radio ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsRadio.displayName = DISPLAY_NAME;
export default SsRadio;
