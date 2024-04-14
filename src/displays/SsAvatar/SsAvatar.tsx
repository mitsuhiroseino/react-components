import Avatar from '@mui/material/Avatar';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsAvatarProps } from './types';

const SsAvatar = forwardRef((props: SsAvatarProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <Avatar ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsAvatar.displayName = DISPLAY_NAME;
export default SsAvatar;
