import { Global, css } from '@emotion/react';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/system';
import { InfoWindow } from '@react-google-maps/api';
import { forwardRef } from 'react';

import { DISPLAY_NAME } from './constants';
import { SsInfoWindowProps } from './types';

const StyledInfoWindow = styled(InfoWindow)({
  '& .gm-style-iw.gm-style-iw-c': {
    padding: 0,
  },
});

const SsInfoWindow = forwardRef((props: SsInfoWindowProps, ref: any) => {
  const { children, Component = Stack, ComponentProps, ...rest } = props;

  return (
    <>
      <Global
        styles={css`
          .gm-style-iw.gm-style-iw-c {
            padding: 0;
          }
          .gm-style-iw.gm-style-iw-c > .gm-style-iw-d {
            margin-right: -18px;
            margin-bottom: -12px;
          }
          .gm-style-iw.gm-style-iw-c > .gm-ui-hover-effect {
          }
        `}
      />
      <StyledInfoWindow {...rest}>
        <Component {...ComponentProps}>{children}</Component>
      </StyledInfoWindow>
    </>
  );
});
SsInfoWindow.displayName = DISPLAY_NAME;
export default SsInfoWindow;
