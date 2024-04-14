import TreeItem from '@mui/lab/TreeItem';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsTreeItemProps } from './types';

const StyledTreeItem: any = styled(TreeItem)({
  '& .MuiTreeItem-content': {
    padding: 4,
  },
  '& .MuiTreeItem-label': {
    display: 'flex',
    alignItems: 'center',
    minHeight: 36,
  },
});

const SsTreeItem = forwardRef((props: SsTreeItemProps, ref: ForwardedRef<HTMLDivElement | unknown>) => {
  const { className, nodeId, data, children, ...rest } = props;
  return (
    <StyledTreeItem ref={ref} className={clsx(CLASS_NAME, className)} nodeId={nodeId} {...rest}>
      {Array.isArray(data)
        ? data.map((node, i) => {
            let { nodeId: childNodeId, ...childRest } = node;
            if (childNodeId == null) {
              childNodeId = `${nodeId}-${i}`;
            }
            return <SsTreeItem key={childNodeId} nodeId={childNodeId} {...childRest} />;
          })
        : children}
    </StyledTreeItem>
  );
});
SsTreeItem.displayName = DISPLAY_NAME;
export default SsTreeItem;
