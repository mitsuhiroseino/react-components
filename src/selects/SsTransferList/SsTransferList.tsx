import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import asArray from '@visue/core/utils/array/asArray';
import useOptions from '@visue/react-core/hooks/useOptions';
import clsx from 'clsx';
import indexOf from 'lodash/indexOf';
import isEmpty from 'lodash/isEmpty';
import noop from 'lodash/noop';
import { ForwardedRef, forwardRef, useCallback, useEffect, useState } from 'react';

import SsValuesList from '../../lists/SsValuesList';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsTransferListProps } from './types';

function getUnselectedOptions(value: any[], options: any[]) {
  // optionsの順番を尊重し、valueに含まれていないものを取得
  const result: any[] = [];
  for (const option of options) {
    if (indexOf(value, option.value) === -1) {
      result.push(option);
    }
  }
  return result;
}

function getSelectedOptions(value: any[], options: any[]) {
  // valueの順番を尊重し、valueに含まれているものを取得
  const result: any[] = [];
  for (const val of value) {
    for (const option of options) {
      if (val === option.value) {
        result.push(option);
        break;
      }
    }
  }
  return result;
}

function getUnselectedValues(value: any[], options: any[]) {
  const result: any[] = [];
  for (const option of options) {
    if (indexOf(value, option.value) === -1) {
      result.push(option.value);
    }
  }
  return result;
}

function toValue(options: any[]) {
  return options.map((option) => option.value);
}

const SsTransferList = forwardRef((props: SsTransferListProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {
      className,
      value = [],
      options,
      onChange = noop,
      selectedIcon = <CheckBoxIcon />,
      unselectedIcon = <CheckBoxOutlineBlankIcon />,
      ...rest
    } = props,
    opts = useOptions(options),
    [optionsState, setOptionsState] = useState({
      leftOptions: [],
      rightOptions: [],
      leftSelected: [],
      rightSelected: [],
    } as any),
    // 左の選択肢の選択状態を変更した時
    handleLeftSelected = useCallback((selected) => {
      // leftの選択状態を更新
      setOptionsState((currentState) => ({
        ...currentState,
        leftSelected: selected,
      }));
    }, []),
    // 右の選択肢の選択状態を変更した時
    handleRightSelected = useCallback((selected) => {
      // rightの選択状態を更新
      setOptionsState((currentState) => ({
        ...currentState,
        rightSelected: selected,
      }));
    }, []),
    // 左の選択肢を全て右に追加した時
    handleAllRight = useCallback(() => {
      const { rightOptions, leftOptions, rightSelected } = optionsState;
      setOptionsState({
        leftOptions,
        rightOptions,
        leftSelected: [],
        rightSelected,
      });
      // 値の更新
      onChange(toValue(rightOptions.concat(leftOptions)));
    }, [optionsState, onChange]),
    // 左の選択肢から選択されたものだけ右に追加した時
    handleSelectedRight = useCallback(() => {
      // 選択状態・値の更新
      const { rightOptions, leftOptions, leftSelected, rightSelected } = optionsState;
      setOptionsState({
        leftOptions,
        rightOptions,
        leftSelected: [],
        rightSelected,
      });
      onChange(toValue(rightOptions).concat(leftSelected));
    }, [optionsState, onChange]),
    // 右の選択肢から選択されたものだけ左に追加した時
    handleSelectedLeft = useCallback(() => {
      // 選択状態・値の更新
      const { rightOptions, leftOptions, leftSelected, rightSelected } = optionsState;
      setOptionsState({
        leftOptions,
        rightOptions,
        leftSelected,
        rightSelected: [],
      });
      onChange(getUnselectedValues(rightSelected, rightOptions));
    }, [optionsState, onChange]),
    // 右の選択肢を全て左に追加した時
    handleAllLeft = useCallback(() => {
      // 値の更新
      const { rightOptions, leftOptions, leftSelected } = optionsState;
      setOptionsState({
        leftOptions,
        rightOptions,
        leftSelected,
        rightSelected: [],
      });
      // 値の更新
      onChange([]);
    }, [optionsState, onChange]);

  // 値か選択肢が更新された時
  useEffect(() => {
    const values = asArray(value),
      { leftOptions, rightOptions } = optionsState,
      nextState = {
        ...optionsState,
        leftOptions: getUnselectedOptions(
          values,
          isEmpty(leftOptions) && isEmpty(rightOptions) ? opts : leftOptions.concat(rightOptions),
        ),
        rightOptions: getSelectedOptions(values, opts),
      };
    setOptionsState(nextState);
  }, [value, opts]);

  return (
    <Stack
      ref={ref}
      className={clsx(CLASS_NAME, className)}
      spacing={2}
      direction="row"
      justifyContent="stretch"
      alignItems="stretch"
      {...rest}
    >
      <SsValuesList
        sx={{ flex: '1 1 50%' }}
        value={optionsState.leftSelected}
        options={optionsState.leftOptions}
        onChange={handleLeftSelected}
        selectedIcon={selectedIcon}
        unselectedIcon={unselectedIcon}
      />
      <Stack direction="column" justifyContent="center" spacing={2}>
        <IconButton onClick={handleAllRight} disabled={optionsState.leftOptions.length === 0}>
          <KeyboardDoubleArrowRightIcon />
        </IconButton>
        <IconButton onClick={handleSelectedRight} disabled={optionsState.leftSelected.length === 0}>
          <KeyboardArrowRightIcon />
        </IconButton>
        <IconButton onClick={handleSelectedLeft} disabled={optionsState.rightSelected.length === 0}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton onClick={handleAllLeft} disabled={optionsState.rightOptions.length === 0}>
          <KeyboardDoubleArrowLeftIcon />
        </IconButton>
      </Stack>
      <SsValuesList
        sx={{ flex: '1 1 50%' }}
        value={optionsState.rightSelected}
        options={optionsState.rightOptions}
        onChange={handleRightSelected}
        selectedIcon={selectedIcon}
        unselectedIcon={unselectedIcon}
      />
    </Stack>
  );
});
SsTransferList.displayName = DISPLAY_NAME;
export default SsTransferList;
