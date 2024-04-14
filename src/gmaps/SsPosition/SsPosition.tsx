import { forwardRef } from 'react';

import SsAccuracy from '../SsAccuracy';
import SsHeading from '../SsHeading';
import SsPoint from '../SsPoint';
import usePosition from '../hooks/usePosition';
import { DISPLAY_NAME } from './constants';
import { SsPositionProps } from './types';

/**
 * 位置を描画する
 */
const SsPosition = forwardRef((props: SsPositionProps, ref: any) => {
  const {
      positionAnimation,
      positionAnimationOptions,
      accuracyVisible,
      accuracyProps,
      headingVisible,
      headingProps,
      lat,
      lng,
      position,
      accuracy,
      altitude,
      altitudeAccuracy,
      heading,
      speed,
      timestamp,
      ...rest
    } = props,
    pos = usePosition(lat, lng, position);

  return pos ? (
    <>
      <SsPoint
        ref={ref}
        {...rest}
        position={pos}
        positionAnimation={positionAnimation}
        positionAnimationOptions={positionAnimationOptions}
      />
      {accuracyVisible ? (
        <SsAccuracy
          center={pos}
          radius={accuracy}
          centerAnimation={positionAnimation}
          centerAnimationOptions={positionAnimationOptions}
          {...accuracyProps}
        />
      ) : null}
      {headingVisible ? (
        <SsHeading
          position={pos}
          heading={heading}
          positionAnimation={positionAnimation}
          positionAnimationOptions={positionAnimationOptions}
          {...headingProps}
        />
      ) : null}
    </>
  ) : null;
});
SsPosition.displayName = DISPLAY_NAME;
export default SsPosition;
