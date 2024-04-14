import { TextFieldProps } from '@mui/material/TextField';
import { TextareaAutosizeProps } from '@mui/material/TextareaAutosize';

type Handlers = 'onChange' | 'onInvalid' | 'onKeyDown' | 'onKeyUp';

export type SsTextareaProps = Omit<TextFieldProps, Handlers> & Pick<TextareaAutosizeProps, Handlers> & {};
