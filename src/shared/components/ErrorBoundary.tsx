import { Component, type ErrorInfo, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, info: ErrorInfo) => void;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.props.onError?.(error, info);
  }

  private handleReset = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      return (
        <div role="alert" className="p-4 text-red-700">
          <h2 className="text-lg font-semibold">Something went wrong</h2>
          <p className="mt-2 text-sm">{this.state.error?.message}</p>
          <button
            type="button"
            onClick={this.handleReset}
            className="mt-4 rounded bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700"
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
