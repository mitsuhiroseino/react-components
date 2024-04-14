import AvatarGroup from '@mui/material/AvatarGroup';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsAvatarGroupProps } from './types';

const SsAvatarGroup = forwardRef((props: SsAvatarGroupProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <AvatarGroup ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsAvatarGroup.displayName = DISPLAY_NAME;
export default SsAvatarGroup;
