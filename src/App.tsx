import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import {Home} from './components/Home'
import {Checkout} from './components/Checkout';
import {Login} from './components/Login';
import {Register} from './components/Register';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AuthRoute from './components/AuthRoute';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
        <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/checkout' element={[<Header /> , <Checkout />]} />
            <Route path='/' element={
            <AuthRoute>
              <Header />
              <Home />
            </AuthRoute> 
            } />
        </Routes>
       
    </div>
    </BrowserRouter>
  );
}

export default App;
