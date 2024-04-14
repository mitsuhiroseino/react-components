import { ListItemProps } from '@mui/material/ListItem';

export type SsValueListItemProps = Omit<ListItemProps, 'value'> & {
  label?: string;
  description?: string;
  value?: boolean;
  selectedIcon?: any;
  unselectedIcon?: any;
  onClick?: (event: any) => void;
};
