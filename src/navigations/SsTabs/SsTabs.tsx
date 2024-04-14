import Tabs from '@mui/material/Tabs';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsTabsProps } from './types';

const SsTabs = forwardRef((props: SsTabsProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Tabs ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsTabs.displayName = DISPLAY_NAME;
export default SsTabs;
