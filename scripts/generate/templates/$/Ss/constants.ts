/**
 * コンポーネント名
 */
export const DISPLAY_NAME = 'Ss{{uppercamelcase}}' as const;

/**
 * コンポーネント種別
 */
export const COMPONENT_TYPE = '{{lowercamelcase}}' as const;

/**
 * CSSクラス名
 */
export const CLASS_NAME = `ss-${COMPONENT_TYPE}` as const;
