import HasValue from '../../features/HasValue';

/**
 * 値を持つコンポーネントのプロパティ
 */
export type UseValueProps<V = any> = HasValue<V>;

/**
 * useValueのオプション
 */
export type UseValueOptions<V = any> = {
  /**
   * valueがnull,undefinedだった場合の値
   */
  defaultValue?: V;
};
