import Autocomplete from '@mui/material/Autocomplete';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsAutocompleteProps } from './types';

const SsAutocomplete = forwardRef(
  <
    Value,
    Multiple extends boolean | undefined,
    DisableClearable extends boolean | undefined,
    FreeSolo extends boolean | undefined,
    ChipComponent extends React.ElementType = React.ElementType,
  >(
    props: SsAutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const { className, ...rest } = props;
    return <Autocomplete ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
  },
);
SsAutocomplete.displayName = DISPLAY_NAME;
export default SsAutocomplete;
