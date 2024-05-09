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
  props: { startIcon: true, endIcon: true, ...INHERITED_TEXT_FIELD_PROPS },
};
