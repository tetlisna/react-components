import React from 'react';
import './App.css';
import ListItem from './Components/ItemsSection/ListItem';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <ListItem />
      </ErrorBoundary>
    );
  }
}

export default App;
