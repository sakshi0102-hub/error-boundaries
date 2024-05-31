import React from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import MyComponent from './MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Wrap MyComponent with ErrorBoundary */}
        <ErrorBoundary>
          <MyComponent />
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
