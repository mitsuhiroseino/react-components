import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import isEmptyValue from '@visue/utils/lang/isEmptyValue';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsTextareaProps } from './types';

const StyledOutlinedInput = styled(OutlinedInput)({
  '& .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-formControl': {
    alignItems: 'flex-start',
  },
  // '& .MuiInputBase-input.MuiOutlinedInput-input': {
  //   minHeight: '100%',
  //   boxSizing: 'border-box',
  // },
});

const SsTextarea = forwardRef((props: SsTextareaProps, ref: ForwardedRef<any>) => {
  const { id, className, variant, label, InputLabelProps, helperText, FormHelperTextProps, margin, ...rest } = props;
  return (
    <FormControl className={clsx(CLASS_NAME, className)} variant={variant}>
      {!isEmptyValue(label) && <InputLabel {...InputLabelProps}>{label}</InputLabel>}
      <StyledOutlinedInput id={id} inputComponent="textarea" label={label} {...rest} />
      {!isEmptyValue(helperText) && <FormHelperText {...FormHelperTextProps}>{helperText}</FormHelperText>}
    </FormControl>
  );
});
SsTextarea.displayName = DISPLAY_NAME;
export default SsTextarea;
