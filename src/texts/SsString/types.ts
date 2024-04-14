import { FormatOptions } from '@visue/core/utils/string/format';
import { UseStringAnimationOptions } from '@visue/react-core/hooks/useStringAnimation';
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
