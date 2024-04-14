import ImageList from '@mui/material/ImageList';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsImageListProps } from './types';

const SsImageList = forwardRef((props: SsImageListProps, ref: ForwardedRef<HTMLUListElement>) => {
  const { className, ...rest } = props;
  return <ImageList ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsImageList.displayName = DISPLAY_NAME;
export default SsImageList;
