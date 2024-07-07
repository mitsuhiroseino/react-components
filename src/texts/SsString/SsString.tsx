import useStringAnimation from '@visue/react-core/hooks/useStringAnimation';
import formatString from '@visue/utils/string/format';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, useMemo } from 'react';

import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsStringProps } from './types';

const SsString = forwardRef((props: SsStringProps, ref: ForwardedRef<HTMLSpanElement>) => {
  const { className, value, animation, anumationOptions, params, formatOptions, ...rest } = props,
    str = useMemo(
      () => (params != null ? formatString(value as string, { params, ...formatOptions }) : String(value)),
      [value, params, formatOptions],
    ),
    text = useStringAnimation(str || '', animation, { iterationCount: 1, ...anumationOptions });

  return (
    <span ref={ref} className={clsx(CLASS_NAME, className)} {...rest}>
      {text}
    </span>
  );
});
SsString.displayName = DISPLAY_NAME;
export default SsString;
