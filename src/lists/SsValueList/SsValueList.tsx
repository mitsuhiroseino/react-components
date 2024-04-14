import CheckIcon from '@mui/icons-material/Check';
import useOptions from '@visue/react-core/hooks/useOptions';
import clsx from 'clsx';
import noop from 'lodash/noop';
import { Attributes, ForwardedRef, forwardRef, useMemo } from 'react';

import SsBlankIcon from '../../icons/SsBlankIcon';
import SsList from '../SsList';
import SsValueListItem from '../SsValueListItem';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsValueListProps } from './types';

const SsValueList = forwardRef((props: SsValueListProps, ref: ForwardedRef<HTMLUListElement>) => {
  const {
      className,
      value,
      options,
      selectedIcon = <CheckIcon color="primary" />,
      unselectedIcon = <SsBlankIcon />,
      unselectedValue = '',
      onChange = noop,
      ...rest
    } = props,
    opts = useOptions<any>(options),
    handlers = useMemo(
      () =>
        opts.map((option) => (event) => {
          const newValue = option.value;
          if (value === newValue) {
            onChange(unselectedValue);
          } else {
            onChange(newValue);
          }
        }),
      [opts, value, unselectedValue],
    );

  return (
    <SsList ref={ref} className={clsx(CLASS_NAME, className)} {...rest}>
      {opts.map((option, i) => {
        return (
          <SsValueListItem
            key={option.value}
            value={value === option.value}
            label={option.label}
            description={option.description}
            onClick={handlers[i] as any}
            selectedIcon={selectedIcon}
            unselectedIcon={unselectedIcon}
          />
        );
      })}
    </SsList>
  );
});
SsValueList.displayName = DISPLAY_NAME;
export default SsValueList;
