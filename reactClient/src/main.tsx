import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter , Routes , Route , Navigate } from 'react-router-dom';
import { authProvider as AP } from './auth/context/auth.context';
import { PublicRoute } from './auth/routes/auth.routes';
import { PrivateRoute } from './auth/routes/auth.routes';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import './app.sass'
import LoginOrRegister from './pages/login.page';
import Private from './pages/private.page';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AP>
      <BrowserRouter>
        <Routes>
          <Route path='' element={ <PublicRoute><LoginOrRegister/></PublicRoute> } />
          <Route path='private' element={ <PrivateRoute><Private/></PrivateRoute> } />
          <Route path='*' element={ <PublicRoute><Navigate to=''/></PublicRoute> } />
        </Routes>
      </BrowserRouter>
    </AP>
  </React.StrictMode>,
)
