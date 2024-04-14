import isError from 'lodash/isError';
import React from 'react';

/**
 * 描画時に発生したエラーをハンドリングするコンポーネント
 */
export default class SsErrorBoundary extends React.Component<{ children: any }, { error: any }> {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.error(errorInfo);
  }

  render(): React.ReactNode {
    const error = this.state.error;
    if (error) {
      const message = isError(error) ? (error as Error).toString() : JSON.stringify(error);
      return (
        <div>
          <div>Unexpected errors occurred.</div>
          <div>{message}</div>
        </div>
      );
    }
    return this.props.children;
  }
}
