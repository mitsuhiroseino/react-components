import Stepper from '@mui/material/Stepper';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsStepperProps } from './types';

const SsStepper = forwardRef((props: SsStepperProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Stepper ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsStepper.displayName = DISPLAY_NAME;
export default SsStepper;
