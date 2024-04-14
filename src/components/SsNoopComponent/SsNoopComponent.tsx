import { FC } from 'react';
import { SsNoopComponentProps } from './types';

const SsNoopComponent: FC<SsNoopComponentProps> = (props: SsNoopComponentProps = {}) => <>{props.children}</>;
SsNoopComponent.displayName = 'SsNoopComponent';
export default SsNoopComponent;
