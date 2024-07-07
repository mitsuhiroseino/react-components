import useForwardedRef from '@visue/react-core/hooks/useForwardedRef';
import formatDate from '@visue/utils/date/format';
import pollFunction from '@visue/web-core/utils/function/pollFunction';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, useEffect } from 'react';

import SsTypography from '../SsTypography';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsTimeProps } from './types';

const SsTime = forwardRef((props: SsTimeProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
      className,
      format = 'yyyy/MM/dd HH:mm:ss',
      interval = 1000,
      formatOptions,
      renderingTimingOptions,
      ...rest
    } = props,
    [setter, timeRef] = useForwardedRef(ref);

  useEffect(() => {
    const cancel = pollFunction(
      () => {
        const dom = timeRef.current;
        if (dom) {
          dom.innerText = formatDate(new Date(), { format, ...formatOptions }) as string;
        }
      },
      { interval, ...renderingTimingOptions },
    );
    return () => {
      cancel();
    };
  }, [format, interval, formatOptions, renderingTimingOptions]);

  return <SsTypography ref={setter} className={clsx(CLASS_NAME, className)} {...rest}></SsTypography>;
});
SsTime.displayName = DISPLAY_NAME;
export default SsTime;
