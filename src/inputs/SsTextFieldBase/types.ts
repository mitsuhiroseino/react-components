import { TextFieldProps } from '@mui/material/TextField';
import { ReactNode } from 'react';
import { SsRenderableCompProps } from '../../types';
import { INHERITED_TEXT_FIELD_PROPS } from './constants';

export type InheritedTextFieldProps = keyof typeof INHERITED_TEXT_FIELD_PROPS;

export type SsTextFieldBaseProps = SsRenderableCompProps &
  Pick<TextFieldProps, InheritedTextFieldProps> & {
    startIcon?: ReactNode;
    endIcon?: ReactNode;
  };
