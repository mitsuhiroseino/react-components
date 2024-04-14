import { ForwardedRef } from 'react';

import { SsFitTextProps } from '../SsFitText';
import { HORIZONTAL_LAYOUT, VERTICAL_LAYOUT } from './constants';

export type VerticalLayoyt = (typeof VERTICAL_LAYOUT)[keyof typeof VERTICAL_LAYOUT];

export type HorizontalLayoyt = (typeof HORIZONTAL_LAYOUT)[keyof typeof HORIZONTAL_LAYOUT];

export type SsBlockTextProps = SsFitTextProps & {
  /**
   * text部分のdom用のref
   */
  textRef?: ForwardedRef<HTMLDivElement>;

  /**
   * 縦位置
   */
  verticalLayoyt?: VerticalLayoyt;

  /**
   * 横位置
   */
  horizontalLayoyt?: HorizontalLayoyt;
};
