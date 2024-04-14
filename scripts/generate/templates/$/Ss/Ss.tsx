import {{uppercamelcase}} from '@mui/material/{{uppercamelcase}}';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { Ss{{uppercamelcase}}Props } from './types';

const Ss{{uppercamelcase}} = forwardRef((props: Ss{{uppercamelcase}}Props, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, ...rest } = props;
  return <{{uppercamelcase}} ref={ref} className={clsx(CLASS_NAME, className)} {...rest} />;
});
Ss{{uppercamelcase}}.displayName = DISPLAY_NAME;
export default Ss{{uppercamelcase}};
