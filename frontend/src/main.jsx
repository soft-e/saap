import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
//import './index.css'
import { BrowserRouter } from "react-router-dom"
import { SessionContextProvider } from './context/context-rodrigo/SessionProvider.jsx';

const storedSession = localStorage.getItem('session');
const initialSession = storedSession ? JSON.parse(storedSession) : { isLoggedIn: false, user: null };

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SessionContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SessionContextProvider>
  </React.StrictMode>,
)