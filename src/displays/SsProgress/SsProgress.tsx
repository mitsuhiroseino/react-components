import Box from '@mui/material/Box';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, useMemo } from 'react';

import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsProgressProps } from './types';

/**
 * プログレスバー
 */
const SsProgress = forwardRef((props: SsProgressProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
      value,
      minValue = 0,
      maxValue = 1,
      animation,
      className,
      format = '##0.0',
      formatOptions,
      width = 240,
      height = 40,
      ...rest
    } = props,
    percentage = useMemo(
      () => Math.round(((value - minValue) / (maxValue - minValue)) * 1000) / 10,
      [value, minValue, maxValue],
    );

  return (
    <Box
      ref={ref}
      className={clsx(CLASS_NAME, className)}
      width={width}
      height={height}
      sx={{
        backgroundColor: 'gray',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        borderRadius: 100,
        overflow: 'hidden',
        boxSizing: 'border-box',
        padding: 0,
      }}
      {...rest}
    >
      <Box
        width={width}
        sx={{
          backgroundColor: 'transparent',
          color: 'black',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box',
          padding: 0,
        }}
      >
        {percentage}
      </Box>
      <Box
        style={{
          width: `${percentage}%`,
          backgroundColor: 'red',
          overflow: 'hidden',
          position: 'absolute',
          boxSizing: 'border-box',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          padding: 0,
        }}
      >
        <Box
          width={width}
          sx={{
            backgroundColor: 'transparent',
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {percentage}
        </Box>
      </Box>
    </Box>
  );
});
SsProgress.displayName = DISPLAY_NAME;
export default SsProgress;
