import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import clsx from 'clsx';
import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import noop from 'lodash/noop';
import { FC, ForwardedRef, forwardRef } from 'react';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsDialogProps } from './types';

const DefaultIconButton: FC<IconButtonProps> = (props: IconButtonProps) => (
  <IconButton
    sx={{
      position: 'absolute',
      right: 1,
      left: 1,
    }}
  >
    <CloseIcon />
  </IconButton>
);

const SsDialog = forwardRef((props: SsDialogProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
    className,
    open,
    onClose = noop,
    title,
    closable,
    CloseButton = DefaultIconButton,
    actions,
    children,
    DialogTitleProps,
    DialogContentProps,
    DialogContentTextProps,
    DialogActionsProps,
    ...rest
  } = props;
  return (
    <Dialog ref={ref} className={clsx(CLASS_NAME, className)} open={open} onClose={onClose} {...rest}>
      {title != null && <DialogTitle {...DialogTitleProps}>{title}</DialogTitle>}
      {closable && <CloseButton onClick={onClose} />}
      {children != null && (
        <DialogContent {...DialogContentProps}>
          {isString(children) || isNumber(children) ? (
            <DialogContentText {...DialogContentTextProps}>{children}</DialogContentText>
          ) : (
            children
          )}
        </DialogContent>
      )}
      {actions != null && <DialogActions {...DialogActionsProps}>{actions}</DialogActions>}
    </Dialog>
  );
});
SsDialog.displayName = DISPLAY_NAME;
export default SsDialog;
