import { SsListProps } from '../SsList';

export type SsValueListProps = SsListProps & {
  value: any;
  options: any[];
  selectedIcon?: any;
  unselectedIcon?: any;
  unselectedValue?: any;
  onChange?: (value: any) => void;
};
