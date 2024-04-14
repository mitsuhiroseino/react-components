import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import useOptions from '@visue/react-core/hooks/useOptions';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsRadioButtonsProps } from './types';

const SsRadioButtons = forwardRef((props: SsRadioButtonsProps | any, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, label, options = [], ...rest } = props,
    opts = useOptions(options);

  return (
    <FormControl ref={ref} className={clsx(CLASS_NAME, className)} {...rest}>
      <FormLabel>{label}</FormLabel>
      <RadioGroup row>
        {opts.map((option, i) => (
          <FormControlLabel key={i} control={<Radio />} value={option.value} label={option.label} />
        ))}
      </RadioGroup>
    </FormControl>
  );
});
SsRadioButtons.displayName = DISPLAY_NAME;
export default SsRadioButtons;
