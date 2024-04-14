import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import SsTextField from '../SsTextField';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsPickerFieldBaseProps } from './types';

const SsPickerFieldBase = forwardRef((props: SsPickerFieldBaseProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <SsTextField ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsPickerFieldBase.displayName = DISPLAY_NAME;
export default SsPickerFieldBase;
