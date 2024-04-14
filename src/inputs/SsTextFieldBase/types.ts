import { TextFieldProps } from '@mui/material/TextField';
import { ReactNode } from 'react';
import { ChangeableProps } from '../../features/Changeable';
import { SsRenderableCompProps } from '../../types';
import { INHERITED_TEXT_FIELD_PROPS } from './constants';

export type InheritedTextFieldProps = keyof typeof INHERITED_TEXT_FIELD_PROPS;

export type SsTextFieldBaseProps<V = any> = SsRenderableCompProps &
  Pick<TextFieldProps, InheritedTextFieldProps> &
  ChangeableProps<V> & {
    startIcon?: ReactNode;
    endIcon?: ReactNode;
  };
