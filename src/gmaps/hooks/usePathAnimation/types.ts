import { UseValueAnimationOptions } from '@visue/react-core/hooks/useValueAnimation';

import { PATH_ANIMATION_TYPE } from './constants';

/**
 * パスのアニメーション種別
 */
export type PathAnimationType = (typeof PATH_ANIMATION_TYPE)[keyof typeof PATH_ANIMATION_TYPE];

/**
 * オプション
 */
export type UsePathAnimationOptions = Omit<UseValueAnimationOptions, 'calcValue'> & {
  /**
   * パスのアニメーション種別
   */
  pathAnimationType?: PathAnimationType;
};
