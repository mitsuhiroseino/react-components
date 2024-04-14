import asArray from '@visue/core/utils/array/asArray';
import noop from 'lodash/noop';
import { UseValuesOptions, UseValuesProps } from './types';

/**
 * feature: HasValue用Hook
 * @param props
 */
export default function useValues<V, P extends UseValuesProps<V> = UseValuesProps<V>>(
  props: P,
  options: UseValuesOptions = {},
) {
  const { defaultValues = [] } = options;
  const { values, onChange, ...rest } = props;
  const reusltProps = rest as P;

  if (values == null && defaultValues !== undefined) {
    reusltProps.values = defaultValues;
  } else {
    reusltProps.values = asArray(values);
  }

  reusltProps.onChange = onChange || noop;

  return reusltProps;
}
