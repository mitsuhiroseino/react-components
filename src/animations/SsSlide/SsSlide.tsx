import Slide from '@mui/material/Slide';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsSlideProps } from './types';

const SsSlide = forwardRef((props: SsSlideProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Slide ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsSlide.displayName = DISPLAY_NAME;
export default SsSlide;
