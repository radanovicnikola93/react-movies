import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

const Main = () => {
  return (
    <React.Fragment>
      <App />
    </React.Fragment>
  )
}

root.render(<Main />)