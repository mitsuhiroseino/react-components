import Link from '@mui/material/Link';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsLinkProps } from './types';

const SsLink = forwardRef((props: SsLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
  const { className, ...rest } = props;
  return <Link ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsLink.displayName = DISPLAY_NAME;
export default SsLink;
