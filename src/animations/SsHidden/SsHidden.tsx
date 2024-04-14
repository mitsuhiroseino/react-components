import Hidden from '@mui/material/Hidden';
import { DISPLAY_NAME } from './constants';
import { SsHiddenProps } from './types';

const SsHidden = (props: SsHiddenProps) => {
  return <Hidden {...props} />;
};
SsHidden.displayName = DISPLAY_NAME;
export default SsHidden;
