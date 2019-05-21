import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

const App = () => (
  <div className="greeting">
    <span role="img" aria-label="Atom">⚛️</span>
      Start building your React app here!
    <span role="img" aria-label="Atom">⚛️</span>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
