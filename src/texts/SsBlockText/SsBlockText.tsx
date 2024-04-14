import Box from '@mui/material/Box';
import clsx from 'clsx';
import { ForwardedRef, forwardRef } from 'react';

import SsFitText, { DISPLAY_TYPE, SCALING_TYPE } from '../SsFitText';
import { CLASS_NAME, DISPLAY_NAME, HORIZONTAL_LAYOUT, VERTICAL_LAYOUT } from './constants';
import { SsBlockTextProps } from './types';

const ALIGN_ITEMS = {
    [VERTICAL_LAYOUT.TOP]: 'flex-start',
    [VERTICAL_LAYOUT.MIDDLE]: 'center',
    [VERTICAL_LAYOUT.BOTTOM]: 'flex-end',
  },
  JUSTIFY_CONTENT = {
    [HORIZONTAL_LAYOUT.LEFT]: 'flex-start',
    [HORIZONTAL_LAYOUT.CENTER]: 'center',
    [HORIZONTAL_LAYOUT.RIGHT]: 'flex-end',
  },
  VERTICAL_ORIGIN = {
    [VERTICAL_LAYOUT.TOP]: '0%',
    [VERTICAL_LAYOUT.MIDDLE]: '50%',
    [VERTICAL_LAYOUT.BOTTOM]: '100%',
  },
  HORIZONTAL_ORIGIN = {
    [HORIZONTAL_LAYOUT.LEFT]: '0%',
    [HORIZONTAL_LAYOUT.CENTER]: '50%',
    [HORIZONTAL_LAYOUT.RIGHT]: '100%',
  };

/**
 * 任意のサイズのdom内に表示する文字列の上下左右位置を指定して表示することができるコンポーネント
 */
const SsBlockText = forwardRef((props: SsBlockTextProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
      textRef,
      className,
      children,
      displayType = DISPLAY_TYPE.VISIBLE,
      scalingType = SCALING_TYPE.SCALE,
      verticalLayoyt = VERTICAL_LAYOUT.TOP,
      horizontalLayoyt = HORIZONTAL_LAYOUT.LEFT,
      ...rest
    } = props,
    // 縦位置をalign-itemsに置き換え
    alignItems = ALIGN_ITEMS[verticalLayoyt],
    // 横位置をjustify-contentに置き換え
    justifyContent = JUSTIFY_CONTENT[horizontalLayoyt],
    // widthを基準に文字サイズを決める場合は文字列の幅を100%に
    minWidth = displayType === DISPLAY_TYPE.WIDTH ? '100%' : undefined,
    // heightを基準に文字サイズを決める場合は文字列の高さを100%に
    minHeight = displayType === DISPLAY_TYPE.HEIGHT ? '100%' : undefined,
    // scale変更時の起点は縦位置・横位置に応じた位置に
    scaleOrigin = `${HORIZONTAL_ORIGIN[horizontalLayoyt]} ${VERTICAL_ORIGIN[verticalLayoyt]}`;

  return (
    <Box
      ref={ref}
      className={clsx(CLASS_NAME, className)}
      display="flex"
      alignItems={alignItems}
      justifyContent={justifyContent}
      {...rest}
    >
      <SsFitText
        ref={textRef}
        displayType={displayType}
        scalingType={scalingType}
        maxWidth="100%"
        maxHeight="100%"
        minWidth={minWidth}
        minHeight={minHeight}
        scaleOrigin={scaleOrigin}
      >
        {children}
      </SsFitText>
    </Box>
  );
});
SsBlockText.displayName = DISPLAY_NAME;
export default SsBlockText;
