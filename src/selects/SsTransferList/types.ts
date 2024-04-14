import { StackProps } from '@mui/material/Stack';

export type SsTransferListProps = StackProps & {
  value: any[];
  options: any[];
  onChange?: (value: any[]) => void;
  ButtonComponent?: any;
  ButtonProps?: any;
  selectedIcon?: any;
  unselectedIcon?: any;
};
