import { CircleProps } from '@react-google-maps/api';
import { UseColorsAnimationOptions } from '@visue/react-core/hooks/useColorsAnimation';
import { UseNumberAnimationOptions } from '@visue/react-core/hooks/useNumberAnimation';

import { LatLng } from '../../types';
import { UsePositionAnimationOptions } from '../hooks/usePositionAnimation';

/**
 * プロパティ
 */
export type SsCircleProps = CircleProps &
  LatLng & {
    /**
     * 半径変更時のアニメーション有無
     */
    radiusAnimation?: boolean;

    /**
     * 半径変更時のアニメーションのオプション
     */
    radiusAnimationOptions?: UseNumberAnimationOptions;

    /**
     * 中心の移動時のアニメーション有無
     */
    centerAnimation?: boolean;

    /**
     * 中心の移動時のアニメーションのオプション
     */
    centerAnimationOptions?: UsePositionAnimationOptions;

    /**
     * 色のアニメーション有無
     */
    colorAnimation?: boolean;

    /**
     * 色のアニメーションのオプション
     */
    colorAnimationOptions?: UseColorsAnimationOptions;
  };
