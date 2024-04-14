import SvgIcon from '@mui/material/SvgIcon';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsSvgIconProps } from './types';

const SsSvgIcon = forwardRef((props: SsSvgIconProps, ref: ForwardedRef<SVGSVGElement>) => {
  const { className, ...rest } = props;
  return <SvgIcon ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsSvgIcon.displayName = DISPLAY_NAME;
export default SsSvgIcon;
