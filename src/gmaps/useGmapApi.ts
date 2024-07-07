import useForwardedRef from '@visue/react-core/hooks/useForwardedRef';
import applyIf from '@visue/utils/function/applyIf';
import { ForwardedRef, MutableRefObject, useCallback } from 'react';

import setRef from '../utils/setRef';

/**
 * @react-google-maps/apiからgoogle-mapsのインスタンスを取得するhooks
 * @param ref google-mapsのインスタンスを設定したいref
 * @returns @react-google-maps/apiに渡すprops
 */
export default function useGmapApi<P extends { onLoad?: (instance: G) => void }, G = any>(
  props: P,
  ref: ForwardedRef<G>,
): [P, MutableRefObject<G | null>] {
  const [setter, instanceRef] = useForwardedRef<G>(ref),
    { onLoad, ...rest } = props,
    handleLoad = useCallback(
      (instance: G) => {
        // load時にインスタンスをrefへ設定する
        setRef(setter, instance);
        applyIf(onLoad, [instance]);
      },
      [onLoad],
    );

  // 引数でもらった値の代わりになるものを返す
  return [{ onLoad: handleLoad, ...rest } as P, instanceRef];
}
