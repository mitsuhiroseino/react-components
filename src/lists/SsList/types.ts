import { ListProps } from '@mui/material/List';
import { ListItemProps } from '@mui/material/ListItem';
import { ListItemButtonProps } from '@mui/material/ListItemButton';
import { ListItemIconProps } from '@mui/material/ListItemIcon';
import { ListItemTextProps } from '@mui/material/ListItemText';

export type ListDataItem = {
  $id?: string;
  icon?: any;
  text?: string;
  clickable?: boolean;
  [key: string]: any;
};

export type SsListProps = ListProps & {
  data?: ListDataItem[];
  ItemProps?: ListItemProps;
  IconProps?: ListItemIconProps;
  ButtonProps?: ListItemButtonProps;
  TextProps?: ListItemTextProps;
};
