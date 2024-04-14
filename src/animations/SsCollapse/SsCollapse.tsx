import Collapse from '@mui/material/Collapse';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsCollapseProps } from './types';

const SsCollapse = forwardRef((props: SsCollapseProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Collapse ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsCollapse.displayName = DISPLAY_NAME;
export default SsCollapse;
