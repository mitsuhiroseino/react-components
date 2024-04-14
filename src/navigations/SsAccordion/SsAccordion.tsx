import Accordion from '@mui/material/Accordion';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsAccordionProps } from './types';

const SsAccordion = forwardRef((props: SsAccordionProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Accordion ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsAccordion.displayName = DISPLAY_NAME;
export default SsAccordion;
