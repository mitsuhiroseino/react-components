import NativeSelect from '@mui/material/NativeSelect';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsNativeSelectProps } from './types';

const SsNativeSelect = forwardRef((props: SsNativeSelectProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <NativeSelect ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsNativeSelect.displayName = DISPLAY_NAME;
export default SsNativeSelect;
