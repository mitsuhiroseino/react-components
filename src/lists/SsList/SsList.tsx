import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsListProps } from './types';

const SsList = forwardRef((props: SsListProps, ref: ForwardedRef<HTMLUListElement>) => {
  const { className, data } = props;
  return (
    <List ref={ref} {...props} className={clsx(CLASS_NAME, className)}>
      {data?.map((item, i) => {
        const { $id = `${i}`, icon, text, clickable } = item;
        let iconElm;
        if (icon) {
          iconElm = <ListItemIcon>{icon}</ListItemIcon>;
        }
        let textElm;
        if (text) {
          textElm = <ListItemText>{text}</ListItemText>;
        }
        let content;
        if (clickable) {
          content = (
            <ListItemButton>
              {iconElm}
              {textElm}
            </ListItemButton>
          );
        } else {
          content = [iconElm, textElm];
        }
        return <ListItem key={$id}>{content}</ListItem>;
      })}
    </List>
  );
});
SsList.displayName = DISPLAY_NAME;
export default SsList;
