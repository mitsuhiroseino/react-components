import { CSSProperties } from 'react';
import { Feature } from './features';

/**
 * 全コンポーネント共通のプロパティ
 */
export type SsCompProps = {};

/**
 * エレメントを持つコンポーネント共通のプロパティ
 */
export type SsRenderableCompProps = SsCompProps & { id?: string; className?: string; style?: CSSProperties };

/**
 * コンポーネントの機能の定義
 */
export type Schema<P> = SchemaConfig<P> & {
  /**
   * コンポーネントの依存する機能のマップ
   */
  featureMap?: { [name: string]: Feature<unknown> };
};

/**
 * コンポーネントの定義の設定
 */
export type SchemaConfig<P> = {
  /**
   * 機能名
   */
  name: string;

  /**
   * コンポーネント種別
   */
  type: string;

  /**
   * コンポーネントの依存する機能
   */
  features?: { [name: string]: Feature<any> };

  /**
   * コンポーネントが持つプロパティ
   */
  props?: CompProps<P>;
};

type CompProps<P> = { [K in keyof P]: CompProp };

type CompProp = boolean | {};

/**
 * 緯度・経度をフラットに持つ型
 */
export type LatLng = {
  /**
   * 緯度
   */
  lat?: number;

  /**
   * 経度
   */
  lng?: number;
};

/**
 * 位置情報
 */
export type GeolocationItem<P = LatLng> = LatLng & {
  /**
   * 緯度経度
   */
  position: P;

  /**
   * 緯度・経度の精度
   */
  accuracy: number;

  /**
   * 高度
   */
  altitude: number | null;

  /**
   * 高度の精度
   */
  altitudeAccuracy: number | null;

  /**
   * 向き
   */
  heading: number | null;

  /**
   * 速度
   */
  speed: number | null;

  /**
   * 取得日時
   */
  timestamp: number;
};
