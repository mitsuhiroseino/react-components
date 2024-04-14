import CheckIcon from '@mui/icons-material/Check';
import useOptions from '@visue/react-core/hooks/useOptions';
import clsx from 'clsx';
import indexOf from 'lodash/indexOf';
import noop from 'lodash/noop';
import remove from 'lodash/remove';
import { ForwardedRef, forwardRef, useMemo } from 'react';

import SsBlankIcon from '../../icons/SsBlankIcon';
import SsList from '../SsList';
import SsValueListItem from '../SsValueListItem';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsValuesListProps } from './types';

const SsValuesList = forwardRef((props: SsValuesListProps, ref: ForwardedRef<HTMLUListElement>) => {
  const {
      className,
      value,
      options,
      selectedIcon = <CheckIcon color="primary" />,
      unselectedIcon = <SsBlankIcon />,
      onChange = noop,
      ...rest
    } = props,
    opts = useOptions<any>(options),
    handlers = useMemo(
      () =>
        opts.map((option) => (event) => {
          const newValue = option.value;
          if (indexOf(value, newValue) > -1) {
            // 選択 → 未選択
            remove(value, (item) => item === newValue);
            onChange([...value]);
          } else {
            // 未選択 → 選択
            onChange(value.concat([newValue]));
          }
        }),
      [opts, value],
    );

  return (
    <SsList ref={ref} className={clsx(CLASS_NAME, className)} {...rest}>
      {opts.map((option, i) => {
        return (
          <SsValueListItem
            key={option.value}
            value={indexOf(value, option.value) > -1}
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
SsValuesList.displayName = DISPLAY_NAME;
export default SsValuesList;
