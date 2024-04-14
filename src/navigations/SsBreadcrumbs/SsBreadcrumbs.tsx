import Breadcrumbs from '@mui/material/Breadcrumbs';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsBreadcrumbsProps } from './types';

const SsBreadcrumbs = forwardRef((props: SsBreadcrumbsProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Breadcrumbs ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsBreadcrumbs.displayName = DISPLAY_NAME;
export default SsBreadcrumbs;
