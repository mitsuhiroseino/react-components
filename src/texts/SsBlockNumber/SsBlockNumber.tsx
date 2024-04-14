import formatNumber from '@visue/core/utils/number/format';
import useForwardedRef from '@visue/react-core/hooks/useForwardedRef';
import useNumberAnimation from '@visue/react-core/hooks/useNumberAnimation';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, useMemo } from 'react';

import SsBlockText from '../SsBlockText';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsBlockNumberProps } from './types';

/**
 * SsBlockTextに数値のフォーマット機能を付与したコンポーネント
 */
const SsBlockNumber = forwardRef((props: SsBlockNumberProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { textRef, children, animation, className, format = '#0', formatOptions, ...rest } = props,
    [setTxtRef, txtRef] = useForwardedRef(textRef),
    convert = useMemo(() => {
      if (format != null) {
        return (value: number) => formatNumber(value, { format, ...formatOptions });
      } else {
        return (value: number) => String(value);
      }
    }, [format]),
    text = useNumberAnimation(children, animation, {
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
SsBlockNumber.displayName = DISPLAY_NAME;
export default SsBlockNumber;
