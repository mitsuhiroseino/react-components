import { TreeItemProps } from '@mui/lab/TreeItem';

export type SsTreeItemProps = Omit<TreeItemProps, 'nodeId'> & {
  nodeId?: string;
  data?: SsTreeItemProps[];
};
