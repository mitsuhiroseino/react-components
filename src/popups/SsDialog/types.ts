import { DialogProps } from '@mui/material/Dialog';
import { DialogActionsProps } from '@mui/material/DialogActions';
import { DialogContentProps } from '@mui/material/DialogContent';
import { DialogContentTextProps } from '@mui/material/DialogContentText';
import { DialogTitleProps } from '@mui/material/DialogTitle';
import { ReactComponent } from '@visue/react-core/components';
import { ReactNode } from 'react';

/**
 * SsDialogのプロパティ
 */
export type SsDialogProps = DialogProps & {
  /**
   * タイトル
   */
  title?: ReactNode;

  /**
   * アクション
   */
  actions?: ReactNode;

  /**
   * 閉じるボタンあり
   */
  closable?: boolean;

  /**
   * 閉じるボタン
   */
  CloseButton?: ReactComponent;

  /**
   * ダイアログタイトルのプロパティ
   */
  DialogTitleProps?: DialogTitleProps;

  /**
   * ダイアログアクションのプロパティ
   */
  DialogActionsProps?: DialogActionsProps;

  /**
   * ダイアログコンテントのプロパティ
   */
  DialogContentProps?: DialogContentProps;

  /**
   * ダイアログコンテントテキストのプロパティ
   */
  DialogContentTextProps?: DialogContentTextProps;
};
