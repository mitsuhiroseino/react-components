import { UseValueAnimationOptions } from '@visue/react-core/hooks/useValueAnimation';

/**
 * オプション
 */
export type UsePositionAnimationOptions = Omit<UseValueAnimationOptions, 'calcValue'>;
