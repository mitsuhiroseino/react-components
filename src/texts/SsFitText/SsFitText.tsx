import Box from '@mui/material/Box';
import { SxProps } from '@mui/system/styleFunctionSx/styleFunctionSx';
import useResize, { UseResizeRect } from '@visue/react-core/hooks/useResize';
import getScalesToFit, { GetScalesToFitResult } from '@visue/web-core/utils/string/getScalesToFit';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, useMemo, useState } from 'react';

import { CLASS_NAME, DISPLAY_NAME, DISPLAY_TYPE, SCALING_TYPE } from './constants';
import { ScalingType, SsFitTextProps } from './types';

type SxFn = (scales: GetScalesToFitResult, scalingType: ScalingType, scaleOrigin: string) => SxProps;

// スケールを利用したスタイルを取得するための関数
function getScaleableSx(scale: number, scalingType: ScalingType, scaleOrigin: string) {
  if (scalingType === SCALING_TYPE.FONT_SIZE || scalingType === SCALING_TYPE.HYBRID) {
    const fontSize = REFERENCE_FONT_SIZE * scale;
    if (scalingType !== SCALING_TYPE.HYBRID || fontSize >= 10) {
      // font-sizeまたはhybridでフォントサイズが10px以上の場合はフォントサイズでスケーリング
      return {
        fontSize,
        overflow: 'visible',
      };
    }
  }
  // 上記以外はscaleでスケーリング
  return {
    transformOrigin: scaleOrigin,
    transform: `scale(${scale})`,
    fontSize: REFERENCE_FONT_SIZE,
    overflow: 'visible',
  };
}

// スケールを計算する際に基準にするフォントサイズ
const REFERENCE_FONT_SIZE = 10,
  // スケールを利用するスタイルを取得する関数
  SCALEABLE_SX_FNS: { [type: string]: SxFn } = {
    width: ({ widthScale }: GetScalesToFitResult, scalingType: ScalingType, scaleOrigin: string) =>
      getScaleableSx(widthScale, scalingType, scaleOrigin),
    height: ({ heightScale }: GetScalesToFitResult, scalingType: ScalingType, scaleOrigin: string) =>
      getScaleableSx(heightScale, scalingType, scaleOrigin),
  },
  // 基本的なスタイルを取得する関数
  BASIC_SX_FNS: { [type: string]: SxFn } = {
    visible: () => ({
      overflow: 'visible',
    }),
    hidden: () => ({
      overflow: 'hidden',
    }),
    wrap: () => ({
      whiteSpace: 'normal',
    }),
    ellipsis: () => ({
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    }),
  },
  // スタイルを取得する関数
  SX_FNS: { [type: string]: SxFn } = {
    ...BASIC_SX_FNS,
    ...SCALEABLE_SX_FNS,
  };

/**
 * エレメントのサイズに応じたテキストの表示を行うコンポーネント
 */
const SsFitText = forwardRef((props: SsFitTextProps, ref?: ForwardedRef<HTMLDivElement>) => {
  const {
      className,
      displayType = DISPLAY_TYPE.VISIBLE,
      sx,
      children,
      scalingType = SCALING_TYPE.SCALE,
      scaleOrigin = '0% 0%',
      ...rest
    } = props,
    [scales, setScales] = useState<GetScalesToFitResult>({
      widthScale: 1,
      heightScale: 1,
    }),
    currentSx = useMemo<any>(
      () => ({
        whiteSpace: 'nowrap',
        boxSizing: 'content-box',
        ...SX_FNS[displayType](scales, scalingType, scaleOrigin),
        ...sx,
      }),
      [displayType, children, scales, scalingType, scaleOrigin, sx],
    );

  // リサイズ時の処理
  const [setRef] = useResize(
    (contentRect: UseResizeRect, element: HTMLDivElement) => {
      // 現在のスケールを取得
      const scales = getScalesToFit(children, element, { fontSize: REFERENCE_FONT_SIZE });
      setScales(scales);
    },
    { deps: [children], ref, disabled: !SCALEABLE_SX_FNS[displayType] },
  );

  return (
    <Box ref={setRef} className={clsx(CLASS_NAME, className)} {...rest} sx={currentSx}>
      {children}
    </Box>
  );
});
SsFitText.displayName = DISPLAY_NAME;
export default SsFitText;
