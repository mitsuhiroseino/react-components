import { SsListProps } from '../SsList';

export type SsValuesListProps = Omit<SsListProps, 'onChange'> & {
  value: any[];
  options: any[];
  selectedIcon?: any;
  unselectedIcon?: any;
  onChange?: (value: any[]) => void;
};
