export { DISPLAY_TYPE, SCALING_TYPE } from '../SsFitText';

/**
 * コンポーネント名
 */
export const DISPLAY_NAME = 'SsBlockText' as const;

/**
 * コンポーネント種別
 */
export const COMPONENT_TYPE = 'blocktext' as const;

/**
 * CSSクラス名
 */
export const CLASS_NAME = `ss-${COMPONENT_TYPE}` as const;

/**
 * 縦位置
 */
export const VERTICAL_LAYOUT = {
  /**
   * 上寄せ
   */
  TOP: 'top',

  /**
   * 中央寄せ
   */
  MIDDLE: 'middle',

  /**
   * 下寄せ
   */
  BOTTOM: 'bottom',
} as const;

/**
 * 横位置
 */
export const HORIZONTAL_LAYOUT = {
  /**
   * 左寄せ
   */
  LEFT: 'left',

  /**
   * 中央寄せ
   */
  CENTER: 'center',

  /**
   * 右寄せ
   */
  RIGHT: 'right',
} as const;
