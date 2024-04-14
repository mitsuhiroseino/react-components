import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsTextFieldProps } from './types';

const StyledTextField = styled(TextField)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'stretch',
  alignItems: 'stretch',
  '& .MuiOutlinedInput-root': {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    '& .MuiOutlinedInput-input': {
      flex: '1 0 auto',
    },
  },
});

const SsTextField = forwardRef((props: SsTextFieldProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <StyledTextField ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
SsTextField.displayName = DISPLAY_NAME;
export default SsTextField;
