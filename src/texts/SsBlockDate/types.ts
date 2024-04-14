import { FormatOptions } from '@visue/core/utils/date/format';

import { SsBlockTextProps } from '../SsBlockText';

export type SsBlockDateProps = Omit<SsBlockTextProps, 'children'> &
  Pick<FormatOptions, 'format'> & {
    children?: Date | null;

    /**
     * アニメーションあり
     */
    animation?: boolean;

    /**
     *
     */
    formatOptions?: Omit<FormatOptions, 'format'>;
  };
