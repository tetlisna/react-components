import { Component, ErrorInfo, PropsWithChildren, ReactNode } from 'react';
interface IState {
  isError: boolean;
  errorMessage: string;
}

class ErrorBoundary extends Component<PropsWithChildren, IState> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { isError: false, errorMessage: '' };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({ isError: true, errorMessage: error.message });
  }

  render(): ReactNode {
    if (this.state.isError) {
      return (
        <div style={{ padding: '2rem' }}>
          <h1>Something went wrong.</h1>
          <p>{this.state.errorMessage}</p>
          <p>Reload the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
