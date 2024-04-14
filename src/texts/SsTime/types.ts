import { FormatOptions } from '@visue/core/utils/date/format';
import { PollFunctionOptions } from '@visue/web-core/utils/function/pollFunction';

import { SsTypographyProps } from '../SsTypography';

export type SsTimeProps = SsTypographyProps &
  Pick<PollFunctionOptions, 'interval'> &
  Pick<FormatOptions, 'format'> & {
    /**
     * 描画タイミングに関するオプション
     */
    renderingTimingOptions?: PollFunctionOptions;

    /**
     * フォーマットに関するオプション
     */
    formatOptions?: FormatOptions;
  };
