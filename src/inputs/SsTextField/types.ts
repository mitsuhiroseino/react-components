import { TextFieldProps } from '@mui/material/TextField';
import { ChangeableProps } from '../../features';

export type SsTextFieldProps = TextFieldProps &
  ChangeableProps & {
    semicircle?: boolean;
  };
