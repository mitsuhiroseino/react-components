import { SsBlockNumberProps } from '../../texts/SsBlockNumber';

export type SsProgressProps = SsBlockNumberProps & {
  /**
   * 現在の値
   */
  value: number;

  /**
   * 最小値
   * 未指定の場合は0
   */
  minValue?: number;

  /**
   * 最大値
   * 未指定の場合は1
   */
  maxValue?: number;
};
