import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsTypographyProps } from './types';

// TODO 文字列のハイライト

const SsTypography = forwardRef((props: SsTypographyProps, ref: ForwardedRef<HTMLSpanElement>) => {
  const { className, children, ...rest } = props;
  let text;
  if (children) {
  }

  return (
    <Typography ref={ref} className={clsx(CLASS_NAME, className)} {...rest}>
      {text}
    </Typography>
  );
});
SsTypography.displayName = DISPLAY_NAME;
export default SsTypography;
