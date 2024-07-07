import useDateAnimation from '@visue/react-core/hooks/useDateAnimation';
import useForwardedRef from '@visue/react-core/hooks/useForwardedRef';
import formatDate from '@visue/utils/date/format';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, useMemo } from 'react';

import SsBlockText from '../SsBlockText';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsBlockDateProps } from './types';

/**
 * SsBlockTextに日付のフォーマット機能を付与したコンポーネント
 */
const SsBlockDate = forwardRef((props: SsBlockDateProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { textRef, children, animation, className, format = 'yyyy-MM-dd', formatOptions, ...rest } = props,
    [setTxtRef, txtRef] = useForwardedRef(textRef),
    convert = useMemo(() => {
      if (format != null) {
        return (value: Date) => formatDate(value, { format, ...formatOptions });
      } else {
        return (value: Date) => String(value);
      }
    }, [format]),
    text = useDateAnimation(children, animation, {
      iterationCount: 1,
      convert,
      setValue: (value) => {
        const dom = txtRef.current;
        if (dom) {
          dom.innerHTML = value;
        }
      },
    });

  return (
    <SsBlockText ref={ref} textRef={setTxtRef} className={clsx(CLASS_NAME, className)} {...rest}>
      {text}
    </SsBlockText>
  );
});
SsBlockDate.displayName = DISPLAY_NAME;
export default SsBlockDate;
