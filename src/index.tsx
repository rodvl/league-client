import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/login';
import reportWebVitals from './reportWebVitals';
import Container from './components/atoms/Container';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Container>
      <Login />
    </Container>
  </React.StrictMode>
);

reportWebVitals();
