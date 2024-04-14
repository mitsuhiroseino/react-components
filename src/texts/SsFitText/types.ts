import { BoxProps } from '@mui/material/Box';
import { ForwardedRef } from 'react';

import { DISPLAY_TYPE, SCALING_TYPE } from './constants';

export type DisplayType = (typeof DISPLAY_TYPE)[keyof typeof DISPLAY_TYPE];

export type ScalingType = (typeof SCALING_TYPE)[keyof typeof SCALING_TYPE];

export type SsFitTextProps = Omit<BoxProps, 'children'> & {
  ref?: ForwardedRef<HTMLDivElement>;
  /**
   * 文字列
   */
  children?: string | null;

  /**
   * 表示種別
   * 文字列がdomの大きさを超えた場合の表示方法を指定する
   * デフォルトは`visible`
   */
  displayType?: DisplayType;

  /**
   * スケーリング種別
   * displayTypeが`width`、`height`の場合にのみ有効
   * フォントの大きさを何でコントロールするか
   * `hybrid`はフォントサイズが10px未満を`scale`で処理し、10px以上を`font-size`で処理する
   * デフォルトは`scale`
   */
  scalingType?: ScalingType;

  /**
   * scaleでスケーリングする際の起点(transform-origin)
   * scalingTypeが`scale`、`hybrid`の場合にのみ有効
   * 未指定の場合は'0% 0%'
   */
  scaleOrigin?: string;
};
