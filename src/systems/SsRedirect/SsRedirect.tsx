import { useEffect } from 'react';

import { DISPLAY_NAME } from './constants';
import { SsRedirectProps } from './types';

const SsRedirect = (props: SsRedirectProps) => {
  const { url, redirect } = props;
  useEffect(() => {
    if (redirect && url) {
      window.location.href = url;
    }
  }, [redirect, url]);
  return <></>;
};
SsRedirect.displayName = DISPLAY_NAME;
export default SsRedirect;
