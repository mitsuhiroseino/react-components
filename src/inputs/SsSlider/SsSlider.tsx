import Slider from '@mui/material/Slider';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsSliderProps } from './types';

const SsSlider = forwardRef((props: SsSliderProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Slider ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsSlider.displayName = DISPLAY_NAME;
export default SsSlider;
