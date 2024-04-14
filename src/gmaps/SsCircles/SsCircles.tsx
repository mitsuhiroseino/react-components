import asArray from '@visue/core/utils/array/asArray';
import useRefs from '@visue/react-core/hooks/useRefs';
import { forwardRef, useMemo } from 'react';

import SsCircle from '../SsCircle';
import { DISPLAY_NAME } from './constants';
import { SsCirclesProps } from './types';

const SsCircles = forwardRef((props: SsCirclesProps, ref: any) => {
  const [createRef] = useRefs(ref),
    { value, ...commonParams } = props,
    items = asArray(value),
    refs = useMemo(() => items.map((item, i) => createRef(i)), [items, createRef]);
  return (
    <>
      {items.map((item, i) => {
        const { id = i, lat, lng, ...other } = item;
        return <SsCircle ref={refs[i]} key={id} {...commonParams} {...other} center={{ lat, lng }} />;
      })}
    </>
  );
});
SsCircles.displayName = DISPLAY_NAME;
export default SsCircles;
