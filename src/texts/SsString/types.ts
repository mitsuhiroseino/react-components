import { UseStringAnimationOptions } from '@visue/react-core/hooks/useStringAnimation';
import { FormatOptions } from '@visue/utils/string/format';
import { HTMLProps } from 'react';

export type SsStringProps = Omit<HTMLProps<HTMLSpanElement>, 'children'> &
  Pick<FormatOptions, 'params'> & {
    /**
     * 文字列
     */
    value?: string;

    /**
     * アニメーションあり
     */
    animation?: boolean;

    /**
     * アニメーションのオプション
     */
    anumationOptions?: UseStringAnimationOptions;

    /**
     *
     */
    formatOptions?: Omit<FormatOptions, 'params'>;
  };
