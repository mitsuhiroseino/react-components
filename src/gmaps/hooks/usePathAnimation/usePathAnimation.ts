import useValueAnimation, { UseValueAnimationState } from '@visue/react-core/hooks/useValueAnimation';
import getGeoPathByRatio from '@visue/utils/geo/getGeoPathByRatio';
import getGeoPointByRatio from '@visue/utils/geo/getGeoPointByRatio';
import { useMemo } from 'react';

import { UsePathAnimationOptions } from './types';

// アニメーションのデフォルトオプション
const DEFAULT_OPTIONS: UsePathAnimationOptions = {
    timingFunction: 'easeInOutCubic',
    duration: 1000,
    iterationCount: 1,
  } as const,
  getPoints = (
    path: google.maps.MVCArray<google.maps.LatLng> | google.maps.LatLng[] | google.maps.LatLngLiteral[] = [],
  ): google.maps.LatLng[] | google.maps.LatLngLiteral[] => {
    let points: google.maps.LatLng[] | google.maps.LatLngLiteral[];
    if (path instanceof google.maps.MVCArray) {
      points = path.getArray();
    } else {
      points = path;
    }
    return points;
  },
  // アニメーション用コールバック
  CALLBACKS = {
    entire: (path: google.maps.LatLng[] | google.maps.LatLngLiteral[] = [], options: UsePathAnimationOptions) => {
      // 全体をアニメーション
      return (
        value: google.maps.LatLng[] | google.maps.LatLngLiteral[],
        state: UseValueAnimationState,
        opts: UsePathAnimationOptions,
      ) => {
        return getGeoPathByRatio(path, state.progress);
      };
    },
    latest: (path: google.maps.LatLng[] | google.maps.LatLngLiteral[] = [], options: UsePathAnimationOptions) => {
      // 最後の1つ前から最後の点までのみアニメーション
      const lastIndex = path.length - 1,
        previous = path[lastIndex - 1],
        latest = path[lastIndex],
        newPath = path.slice(0, lastIndex);

      return (
        value: google.maps.LatLng[] | google.maps.LatLngLiteral[],
        state: UseValueAnimationState,
        opts: UsePathAnimationOptions,
      ) => {
        const end = getGeoPointByRatio([{ ...previous }, { ...latest }], state.progress);
        return (newPath as google.maps.LatLng[]).concat([end]);
      };
    },
    difference: (path: google.maps.LatLng[] | google.maps.LatLngLiteral[] = [], options: UsePathAnimationOptions) => {
      // 旧パスと新パスの差分をアニメーションで描画
      const { initialValue = [] } = options,
        pathDiff = path.slice(initialValue.length);

      return (
        value: google.maps.LatLng[] | google.maps.LatLngLiteral[],
        state: UseValueAnimationState,
        opts: UsePathAnimationOptions,
      ) => {
        const updatedPath = getGeoPathByRatio(pathDiff, state.progress);
        return initialValue.concat(updatedPath as any[]);
      };
    },
  } as const;

/**
 * パスの変更時のアニメーションを行う
 * @param path パス
 * @param isEnabled アニメーションの有効／無効
 * @param options オプション
 */
export default function usePathAnimation(
  path: google.maps.MVCArray<google.maps.LatLng> | google.maps.LatLng[] | google.maps.LatLngLiteral[] | undefined,
  isEnabled: boolean | undefined,
  options: UsePathAnimationOptions = {},
): google.maps.LatLngLiteral[] {
  const { pathAnimationType = 'entire' } = options,
    points = useMemo(() => getPoints(path), [path]),
    calcValue = CALLBACKS[pathAnimationType](points, options);
  // パスのアニメーション
  return useValueAnimation(points, isEnabled, {
    ...DEFAULT_OPTIONS,
    ...options,
    calcValue,
  }) as google.maps.LatLngLiteral[];
}
