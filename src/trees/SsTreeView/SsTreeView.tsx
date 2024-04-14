import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TreeView from '@mui/lab/TreeView';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import SsTreeItem from '../SsTreeItem';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsTreeViewProps } from './types';

const DEFAULT_COLLAPSE_ICON = <ArrowDropDownIcon />,
  DEFAULT_EXPAND_ICON = <ArrowRightIcon />,
  SsTreeView = forwardRef((props: SsTreeViewProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      className,
      data,
      children,
      defaultCollapseIcon = DEFAULT_COLLAPSE_ICON,
      defaultExpandIcon = DEFAULT_EXPAND_ICON,
      ...rest
    } = props;
    return (
      <TreeView
        ref={ref}
        className={clsx(CLASS_NAME, className)}
        defaultCollapseIcon={defaultCollapseIcon}
        defaultExpandIcon={defaultExpandIcon}
        {...rest}
      >
        {data
          ? data.map((node, i) => {
              let { nodeId, ...childRest } = node;
              if (nodeId == null) {
                nodeId = String(i);
              }
              return <SsTreeItem key={nodeId} nodeId={nodeId} {...childRest} />;
            })
          : children}
      </TreeView>
    );
  });
SsTreeView.displayName = DISPLAY_NAME;
export default SsTreeView;
