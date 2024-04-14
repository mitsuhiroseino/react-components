export { DIRECTION_TYPE, EXECUTION_STATUS } from '@visue/react-core/hooks/useValueAnimation';

/**
 * アニメーションする対象
 */
export const PATH_ANIMATION_TYPE = {
  /**
   * パス全体のアニメーション
   */
  ENTIRE: 'entire',

  /**
   * 前回との差分のみアニメーション
   */
  DIFFERENCE: 'difference',

  /**
   * 最後の1っ前から最後の点までのみアニメーション
   */
  LATEST: 'latest',
} as const;
