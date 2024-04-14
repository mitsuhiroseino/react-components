/**
 * コンポーネント名
 */
export const DISPLAY_NAME = 'SsFitText' as const;

/**
 * コンポーネント種別
 */
export const COMPONENT_TYPE = 'fittext' as const;

/**
 * CSSクラス名
 */
export const CLASS_NAME = `ss-${COMPONENT_TYPE}` as const;

/**
 * 表示種別
 */
export const DISPLAY_TYPE = {
  /**
   * サイズの調整はせずはみ出した分も表示する
   */
  VISIBLE: 'visible',

  /**
   * サイズの調整はせずはみ出した分は表示しない
   */
  HIDDEN: 'hidden',

  /**
   * サイズの調整はせずはみ出した分は折り返す
   */
  WRAP: 'wrap',

  /**
   * サイズの調整はせず省略記号を表示
   */
  ELLIPSIS: 'ellipsis',

  /**
   * 幅に合わせる
   */
  WIDTH: 'width',

  /**
   * 高さに合わせる
   */
  HEIGHT: 'height',
} as const;

/**
 * スケーリング種別
 */
export const SCALING_TYPE = {
  /**
   * `transform: scale(##);`
   */
  SCALE: 'scale',

  /**
   * `font-size: ##;`
   */
  FONT_SIZE: 'font-size',

  /**
   * スケーリング後のフォントサイズが10px以上の場合はFONT_SIZE準拠
   * 10px未満の場合はSCALE準拠
   */
  HYBRID: 'hybrid',
} as const;
