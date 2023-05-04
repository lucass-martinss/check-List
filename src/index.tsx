import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Checklist from './Checklist';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Checklist />
  </React.StrictMode>
);

reportWebVitals();
