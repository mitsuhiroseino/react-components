import HasValues from '../../features/HasValues';

/**
 * useValuesのプロパティ
 */
export type UseValuesProps<V = any> = HasValues<V>;

/**
 * useValuesのオプション
 */
export type UseValuesOptions<V = any> = {
  /**
   * valueがnull,undefinedだった場合の値
   */
  defaultValues?: V[];
};
