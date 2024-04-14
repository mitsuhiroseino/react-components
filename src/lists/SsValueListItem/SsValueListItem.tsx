import CheckIcon from '@mui/icons-material/Check';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import SsBlankIcon from '../../icons/SsBlankIcon';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsValueListItemProps } from './types';

const SsValueListItem = forwardRef((props: SsValueListItemProps, ref: ForwardedRef<HTMLLIElement>) => {
  const {
    className,
    value,
    label,
    description,
    selectedIcon = <CheckIcon color="primary" />,
    unselectedIcon = <SsBlankIcon />,
    onClick,
    ...rest
  } = props;

  return (
    <ListItem ref={ref} className={clsx(CLASS_NAME, className)} disablePadding {...rest}>
      <ListItemButton onClick={onClick} sx={{ padding: 2, paddingLeft: 3 }}>
        <ListItemIcon sx={{ minWidth: 48 }}>{value ? selectedIcon : unselectedIcon}</ListItemIcon>
        <ListItemText
          title={label}
          primary={label}
          secondary={description}
          sx={{
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
        />
      </ListItemButton>
    </ListItem>
  );
});
SsValueListItem.displayName = DISPLAY_NAME;
export default SsValueListItem;
