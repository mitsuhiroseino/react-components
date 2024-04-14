import { CheckboxProps } from '@mui/material/Checkbox';
import { ReactNode } from 'react';

import { SsFormControlLabelProps } from '../../forms/SsFormControlLabel';

export type SsCheckboxProps = Omit<CheckboxProps, 'checked' | 'value'> & {
  label: ReactNode;
  value?: boolean;
  FormControlLabelProps?: Omit<SsFormControlLabelProps, 'checked' | 'value' | 'label'>;
};
