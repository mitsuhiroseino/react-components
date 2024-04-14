import { styled } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsTextareaAutosizeProps } from './types';

const StyledTextareaAutosize = styled(TextareaAutosize)({
  borderColor: 'rgba(128, 128, 128, 0.5)',
  borderRadius: 4,
  padding: '16px 14px',
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
});

const SsTextareaAutosize = forwardRef((props: SsTextareaAutosizeProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
  const { className, ...rest } = props;
  return <StyledTextareaAutosize ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsTextareaAutosize.displayName = DISPLAY_NAME;
export default SsTextareaAutosize;
