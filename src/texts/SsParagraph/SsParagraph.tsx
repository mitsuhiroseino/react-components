import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, useMemo } from 'react';

import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsParagraphProps } from './types';

const SsParagraph = forwardRef((props: SsParagraphProps, ref: ForwardedRef<HTMLSpanElement>) => {
  const { className, children, ...rest } = props,
    lines = useMemo(() => {
      if (Array.isArray(children)) {
        return children;
      } else if (children != null) {
        return children.replaceAll('\r\n', '\n').split('\n');
      } else {
        return [];
      }
    }, [children]);

  return (
    <Typography ref={ref} className={clsx(CLASS_NAME, className)} paragraph={true} {...rest}>
      {lines.map((line) => (
        <div className="Ss-paragraph-line">{line}</div>
      ))}
    </Typography>
  );
});
SsParagraph.displayName = DISPLAY_NAME;
export default SsParagraph;
