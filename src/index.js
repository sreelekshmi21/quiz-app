import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { QuizContextProvider, ThemeContextProvider } from './context/QuizAppContext';

ReactDOM.render(
    <Router>
    <QuizContextProvider>
      <ThemeContextProvider>
        <App />    
      </ThemeContextProvider>
    </QuizContextProvider>    
    </Router>,
  document.getElementById('root')
);
