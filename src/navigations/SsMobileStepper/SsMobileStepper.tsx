import MobileStepper from '@mui/material/MobileStepper';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsMobileStepperProps } from './types';

const SsMobileStepper = forwardRef((props: SsMobileStepperProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <MobileStepper ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsMobileStepper.displayName = DISPLAY_NAME;
export default SsMobileStepper;
