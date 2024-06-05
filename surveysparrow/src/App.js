import React from 'react';
import RatingBreakdown from './components/RatingBreakdown';
import ErrorBoundary from './components/ErrorrBoundary';

const App = () => {
  return (
    <ErrorBoundary>
    <div>
      <h1 style={{ textAlign: 'center', color: 'white', backgroundColor: '#000', padding: '1rem' }}>Rating Breakdown</h1>
      <RatingBreakdown />
    </div>
    </ErrorBoundary>
  );
};

export default App;
