
import { BrowserRouter } from 'react-router-dom';
import * as React from 'react';
import Spinner from 'react-bootstrap/Spinner';

import './App.css'


const Router = React.lazy(() => import('./components/router'));
const Header = React.lazy(() => import('./components/header/header'));
const Footer = React.lazy(() => import('./components/footer/footer'))

function App() {
  return(
    <React.Suspense fallback={<Spinner animation="border" />}>
      <BrowserRouter>
        
        <Header/>
        <Router />
        <Footer/>
      </BrowserRouter>
    </React.Suspense>
  )
}

export default App;