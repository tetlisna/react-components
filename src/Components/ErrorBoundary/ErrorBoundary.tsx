import { Component, ErrorInfo, PropsWithChildren, ReactNode } from 'react';

interface IState {
  hasError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends Component<PropsWithChildren, IState> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({ hasError: true, errorMessage: error.message });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1> {this.state.errorMessage}
          Reload page.
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
