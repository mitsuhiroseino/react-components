import { StackProps } from '@mui/material/Stack';
import { ReactComponent } from '@visue/react-core/components';
import { ReactNode } from 'react';
import HasValues from '../../features/HasValues';

export type SsOptionalFieldInputProps<V = any> = {
  /**
   * 入力値
   */
  value?: V;

  /**
   * 項目の削除不可
   */
  desableRemove?: boolean;

  /**
   * 入力値変更時のハンドラー
   * @param value 入力値
   * @returns
   */
  onChange?: (value: V) => void;

  /**
   * 項目削除時のハンドラー
   * @returns
   */
  onRemove?: () => void;
};

/**
 * SsOptiolanFieldsのプロパティ
 */
export type SsOptionalFieldsProps<
  V = any,
  P extends SsOptionalFieldInputProps<V> = SsOptionalFieldInputProps<V>,
> = Omit<StackProps, 'onChange'> &
  HasValues<V> & {
    /**
     * 項目追加時の初期値
     */
    initialValue?: V;

    /**
     * 入力コンポーネント
     * renderInputが設定されている場合は無効
     */
    InputComponent?: ReactComponent;

    /**
     * 入力コンポーネントを描画する関数
     * index毎に表示するこん
     *
     * @param props プロパティ
     * @param index インデックス
     * @returns
     */
    renderInput?: (props: P, index: number) => ReactNode;

    /**
     * 全入力コンポーネント共通のプロパティ
     */
    defaultInputProps?: Partial<P> | ((value: V, index: number) => Partial<P>);

    /**
     * 追加ボタンのコンポーネント
     */
    AddButton?: ReactComponent;

    /**
     * 削除ボタンのコンポーネント
     */
    RemoveButton?: ReactComponent;

    /**
     * 項目の追加・削除不可
     */
    disableModify?: boolean;

    onAdd?: (value: V[]) => void;

    onBeforeRemove?: (value: V[], index: number) => Promise<boolean>;

    onRemove?: (value: V[], index: number) => void;

    onChange?: (value: V[], index: number) => void;
  };
