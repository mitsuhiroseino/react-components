import Menu from '@mui/material/Menu';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsMenuProps } from './types';

const SsMenu = forwardRef((props: SsMenuProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Menu ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsMenu.displayName = DISPLAY_NAME;
export default SsMenu;
