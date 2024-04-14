import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import clsx from 'clsx';
import clone from 'lodash/clone';
import cloneDeep from 'lodash/cloneDeep';
import isFunction from 'lodash/isFunction';
import noop from 'lodash/noop';
import { ForwardedRef, forwardRef, useCallback, useMemo } from 'react';
import useValues from '../../hooks/useValues';
import { CLASS_NAME, DISPLAY_NAME } from './constants';
import { SsOptionalFieldInputProps, SsOptionalFieldsProps } from './types';

// デフォルトの追加ボタン
const DefaultAddButton = (props: IconButtonProps) => (
  <IconButton {...props}>
    <AddIcon />
  </IconButton>
);
// デフォルトの削除ボタン
const DefaultRemoveButton = (props: IconButtonProps) => (
  <IconButton color="error" {...props}>
    <DeleteForeverIcon />
  </IconButton>
);

const SsOptionalFields = forwardRef(
  <V, P extends SsOptionalFieldInputProps = SsOptionalFieldInputProps>(
    props: SsOptionalFieldsProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const {
      className,
      values,
      initialValue,
      InputComponent,
      renderInput,
      defaultInputProps,
      AddButton = DefaultAddButton,
      RemoveButton = DefaultRemoveButton,
      disableModify,
      onAdd = noop,
      onBeforeRemove = noop,
      onRemove = noop,
      onChange = noop,
      ...rest
    } = useValues(props);
    // 入力コンポーネントの追加処理
    const handleAdd = useCallback(() => {
      const newValues = clone(values);
      newValues.push(cloneDeep(initialValue));
      onAdd(newValues);
    }, [values, onAdd, initialValue]);
    // 入力コンポーネントの削除処理
    const handleRemove = useCallback(
      (index: number) => {
        const newValue = clone(values);
        newValue.splice(index, 1);
        onRemove(newValue, index);
      },
      [values, onRemove],
    );
    // 入力コンポーネントの値変更時
    const handleChange = useCallback(
      (value: V, index: number) => {
        const newValue = clone(values);
        newValue[index] = value;
        onChange(newValue, index);
      },
      [values, onChange],
    );
    // 個々の入力項目のプロパティ
    const inputPropsList = useMemo(() => {
      const getDefaultInputProps = isFunction(defaultInputProps)
        ? defaultInputProps
        : (value: V) => ({ ...defaultInputProps, value });
      return values.map((value, index) => ({
        ...getDefaultInputProps(value, index),
        onChange: (newValue: V) => {
          handleChange(newValue, index);
        },
      }));
    }, [values, handleChange, defaultInputProps]);

    return (
      <Stack
        ref={ref}
        className={clsx(CLASS_NAME, className)}
        direction="column"
        alignItems="stretch"
        spacing={2}
        {...rest}
      >
        {inputPropsList.map((inputProps, index) => {
          const { desableRemove } = inputProps;
          return (
            <Stack>
              {renderInput(inputProps, index)}
              <RemoveButton onClick={() => handleRemove(index)} />
            </Stack>
          );
        })}
        <Stack justifyContent="flex-start" spacing={2}>
          <AddButton onClick={handleAdd} />
        </Stack>
      </Stack>
    );
  },
);
SsOptionalFields.displayName = DISPLAY_NAME;
export default SsOptionalFields;
