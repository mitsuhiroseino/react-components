import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { Console, Hook, Unhook } from 'console-feed';
import { Message } from 'console-feed/lib/definitions/Component';
import { ForwardedRef, forwardRef, useCallback, useEffect, useState } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsConsoleLogProps } from './types';

/**
 * 一番外側のdiv
 */
const OuterContainer = styled('div')({ position: 'relative' }),
  InnerContainer = styled(SimpleBar)({
    color: 'rgba(255, 255, 255, 0.6)',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: '16px 0',
    borderRadius: 4,
    display: 'flex',
    overflow: 'auto',
    '& .simplebar-scrolSsar::before': {
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
  }),
  /**
   * クリアボタン
   */
  ClearButton = styled(IconButton)({
    position: 'absolute',
    top: 8,
    right: 8,
    color: 'rgba(255, 255, 255, 0.4)',
  }),
  /**
   * consoleのプロパティ
   */
  ConsoleProps = {
    variant: 'dark' as any,
    styles: {
      LOG_BACKGROUND: 'transparent',
      BASE_BACKGROUND_COLOR: 'transparent',
      TABLE_BORDER_COLOR: 'rgba(0, 0, 0, 0.8)',
    },
  };

const SsConsoleLog = forwardRef((props: SsConsoleLogProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, style, ...rest } = props,
    [logs, setLogs] = useState<Message[]>([]),
    onClick = useCallback(() => {
      setLogs([]);
    }, [setLogs]);

  useEffect(() => {
    Hook(window.console, (encoded: any) => setLogs((currentLogs) => currentLogs.concat([encoded])), false);
    return () => {
      Unhook(window.console as any);
    };
  }, []);

  return (
    <OuterContainer ref={ref} className={clsx(CLASS_NAME, className)}>
      <InnerContainer style={style}>
        <Console {...ConsoleProps} {...rest} logs={logs} />
      </InnerContainer>
      <ClearButton onClick={onClick}>
        <DoNotDisturbIcon />
      </ClearButton>
    </OuterContainer>
  );
});
SsConsoleLog.displayName = DISPLAY_NAME;
export default SsConsoleLog;
