import { FormatOptions } from '@visue/utils/number/format';

import { SsBlockTextProps } from '../SsBlockText';

export type SsBlockNumberProps = Omit<SsBlockTextProps, 'children'> &
  Pick<FormatOptions, 'format'> & {
    /**
     * 数値
     */
    children?: number | null;

    /**
     * アニメーションあり
     */
    animation?: boolean;

    /**
     *
     */
    formatOptions?: Omit<FormatOptions, 'format'>;
  };
