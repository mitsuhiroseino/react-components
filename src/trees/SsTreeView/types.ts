import { TreeViewProps } from '@mui/lab/TreeView';

import { SsTreeItemProps } from '../SsTreeItem';

export type SsTreeViewProps = TreeViewProps<any> & {
  data?: SsTreeItemProps[];
};
