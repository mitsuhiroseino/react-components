import { CardProps } from '@mui/material/Card';
import { CardActionAreaProps } from '@mui/material/CardActionArea';
import { CardActionsProps } from '@mui/material/CardActions';
import { CardContentProps } from '@mui/material/CardContent';
import { CardHeaderProps } from '@mui/material/CardHeader';
import { CardMediaProps } from '@mui/material/CardMedia';
import { TypographyProps } from '@mui/material/Typography';
import { MouseEvent, ReactNode } from 'react';

export type SsCardContentProps = CardContentProps;

/**
 * プロパティ
 */
export type SsCardProps = CardProps & {
  title?: ReactNode;
  subheader?: ReactNode;
  avatar?: ReactNode;
  headerActions?: ReactNode;
  image?: string;
  imageHeight?: string | number;
  imageWidth?: string | number;
  contentTitle?: ReactNode;
  actions?: ReactNode;
  onClick?: (event: MouseEvent) => void;
  clickable?: boolean;
  CardActionAreaProps?: CardActionAreaProps;
  CardHeaderProps?: CardHeaderProps;
  CardContentProps?: SsCardContentProps;
  CardContentHeaderProps?: TypographyProps;
  CardContentTypographyProps?: TypographyProps;
  CardActionsProps?: CardActionsProps;
  CardMediaProps?: CardMediaProps;
};
