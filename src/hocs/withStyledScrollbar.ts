import { alpha, styled } from '@mui/system';

export type WithStyledScrollbarOptions = {
  style?: any;
  thumbBorder?: string;
  thumbBorderRadius?: number;
  thumbBackgroundColor?: string;
  activeThumbBackgroundColor?: string;
  scrollbarColor?: string;
  activeScrollbarColor?: string;
  overflow?: string;
};

export default function withStyledScrollbar(Component: any, options: WithStyledScrollbarOptions = {}) {
  const {
    style,
    thumbBorder = 'solid 5px transparent',
    thumbBorderRadius = 8,
    thumbBackgroundColor = 'rgba(0, 0, 0, 0)',
    activeThumbBackgroundColor = alpha(thumbBackgroundColor, 0.1),
    scrollbarColor = 'rgba(0, 0, 0, 0) rgba(255, 255, 255, 0)',
    activeScrollbarColor = 'rgba(0, 0, 0, 0.1) rgba(255, 255, 255, 0.9)',
    overflow = 'overlay',
  } = options;
  return styled(Component)({
    overflow,
    '&::-webkit-scrollbar': {
      height: 16,
      width: 16,
    },
    '&::-webkit-scrollbar-corner': {
      background: 'transparent',
      cursor: 'pointer',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },
    '&::-webkit-scrollbar-thumb': {
      border: thumbBorder,
      backgroundColor: thumbBackgroundColor,
      borderRadius: thumbBorderRadius,
      backgroundClip: 'content-box',
    },
    scrollbarWidth: 'thin',
    scrollbarColor,
    '&:hover': {
      scrollbarColor: activeScrollbarColor,
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: activeThumbBackgroundColor,
      },
    },
    ...style,
  });
}
