import HasChangeableValue from '../../features/Changeable';
import { SchemaConfig } from '../../types';
import { SsTextFieldBaseProps } from './types';

/**
 * コンポーネント名
 */
export const DISPLAY_NAME = 'SsTextFieldBase' as const;

/**
 * コンポーネント種別
 */
export const COMPONENT_TYPE = 'textfieldbase' as const;

/**
 * CSSクラス名
 */
export const CLASS_NAME = `ss-${COMPONENT_TYPE}` as const;

/**
 * 機能
 */
export const FEATURES = { HasChangeableValue } as const;

/**
 * テキストフィールドから継承するプロパティ
 */
export const INHERITED_TEXT_FIELD_PROPS = {
  color: true,
  disabled: true,
  error: true,
  helperText: true,
  label: true,
  placeholder: true,
  required: true,
  size: true,
  type: true,
  variant: true,
} as const;

export const SCHEMA: SchemaConfig<SsTextFieldBaseProps> = {
  name: DISPLAY_NAME,
  type: COMPONENT_TYPE,
  features: { HasChangeableValue },
  props: { startIcon: true, endIcon: true, ...INHERITED_TEXT_FIELD_PROPS },
};

type Feature<P> = {
  props: P;
  setProps?: (props: P) => P;
};
type Features<T extends Record<string, any> = Record<string, any>> = {
  items: { [K in keyof T]: Feature<T[K]> };
};
type Props1 = {
  foo: string;
};
type Props2 = {
  bar: string;
};

const props1: Feature<Props1> = { props: { foo: '123' } };
const props2: Feature<Props2> = { props: { bar: '456' } };
const features: Features = {
  items: { props1, props2 },
};
