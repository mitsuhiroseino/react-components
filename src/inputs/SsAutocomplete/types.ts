import { AutocompleteProps } from '@mui/material/Autocomplete';

export type SsAutocompleteProps<
  Value,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined,
  ChipComponent extends React.ElementType = React.ElementType,
> = AutocompleteProps<Value, Multiple, DisableClearable, FreeSolo, ChipComponent> & {};
