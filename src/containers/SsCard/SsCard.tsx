import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import { ForwardedRef, forwardRef } from 'react';
import SsNoopComponent from '../../components/SsNoopComponent';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsCardProps } from './types';

const SsCard = forwardRef((props: SsCardProps, ref: ForwardedRef<HTMLDivElement | null>) => {
  const {
    className,
    title,
    subheader,
    avatar,
    headerActions,
    image,
    imageHeight = '40%',
    imageWidth = '100%',
    contentTitle,
    children,
    actions,
    clickable,
    onClick,
    CardActionAreaProps,
    CardHeaderProps,
    CardContentProps,
    CardContentHeaderProps,
    CardContentTypographyProps,
    CardActionsProps,
    CardMediaProps,
    ...rest
  } = props;
  const hasHeader = !!avatar || !!headerActions || !!title || !!subheader;
  const hasContent = !!contentTitle || !!children;
  const ActionAreaComponent = clickable ? CardActionArea : SsNoopComponent;

  return (
    <Card ref={ref} className={clsx(CLASS_NAME, className)} {...rest}>
      {hasHeader && (
        <CardHeader avatar={avatar} action={headerActions} title={title} subheader={subheader} {...CardHeaderProps} />
      )}
      <ActionAreaComponent onClick={onClick} {...CardActionAreaProps}>
        {image && (
          <CardMedia
            component="img"
            image={image}
            sx={{
              height: imageHeight,
              width: imageWidth,
            }}
            {...CardMediaProps}
          />
        )}
        {hasContent && (
          <CardContent {...CardContentProps}>
            {contentTitle && (
              <Typography gutterBottom variant="h5" component="div" {...CardContentHeaderProps}>
                {contentTitle}
              </Typography>
            )}
            {children &&
              (isString(children) || isNumber(children) ? (
                <Typography variant="body2" color="text.secondary" {...CardContentTypographyProps}>
                  {children}
                </Typography>
              ) : (
                children
              ))}
          </CardContent>
        )}
      </ActionAreaComponent>
      {actions && (
        <CardActions disableSpacing {...CardActionsProps}>
          {actions}
        </CardActions>
      )}
    </Card>
  );
});
SsCard.displayName = DISPLAY_NAME;
export default SsCard;
