import { FormControlLabelProps } from '@mui/material/FormControlLabel';
import { ReactElement, ReactNode } from 'react';

export type SsFormControlLabelProps = Omit<FormControlLabelProps, 'label' | 'control'> & {
  label?: ReactNode;
  control?: ReactElement<any, any>;
};
