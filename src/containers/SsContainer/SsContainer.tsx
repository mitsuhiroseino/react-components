import styled from '@emotion/styled';
import clsx from 'clsx';

import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsContainerProps } from './types';

const SsContainer = styled.div((props: SsContainerProps) => ({
  display: 'flex',
}));
SsContainer.displayName = DISPLAY_NAME;
export default SsContainer;
