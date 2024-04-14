import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import clsx from 'clsx';
import debounce from 'lodash/debounce';
import { ForwardedRef, forwardRef, useEffect, useMemo, useState } from 'react';

import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsModalMessageProps } from './types';

const ModalContainer = styled('div')({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 100000000,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: 100,
  fontFamily: 'system-ui',
});

const SsModalMessage = forwardRef((props: SsModalMessageProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { className, duration = 1600, message, ...rest } = props,
    [open, setOpen] = useState(false),
    openFn = useMemo(() => {
      return debounce(() => {
        setOpen(true);
        setTimeout(() => {
          setOpen(false);
        }, duration);
      }, 300);
    }, [duration]);

  useEffect(openFn, [message]);

  return (
    <Fade in={open} timeout={1000}>
      <ModalContainer ref={ref} className={clsx(CLASS_NAME, className)} {...rest}>
        <Typography variant="h1">{message}</Typography>
      </ModalContainer>
    </Fade>
  );
});
SsModalMessage.displayName = DISPLAY_NAME;
export default SsModalMessage;
