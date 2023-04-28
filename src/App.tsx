import React from 'react';
import {useEffect} from 'react';
import logo from './logo.svg';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './config/firebase';
import {action} from './app/userReducer';
import './App.css';
import { Header } from './components/Header';
import {Home} from './components/Home'
import {Payment} from './components/Payment';
import {Checkout} from './components/Checkout';
import {Login} from './components/Login';
import {Register} from './components/Register';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AuthRoute from './components/AuthRoute';
import { useAppDispatch, useAppSelector } from './app/hooks';

function App() {
  const dispatch = useAppDispatch();
  const user=  useAppSelector((state) => state.user.user)

  useEffect(() => {
    // console.log(user)
     auth.onAuthStateChanged(authUser => {
      // console.log(JSON.stringify(authUser))
        if(authUser) {
          //  console.log(JSON.stringify(authUser));
          //  console.log(authUser.refreshToken)

           dispatch(action.authenticatedUser(authUser.email ?? ''));
        }
        else { 
          dispatch(action.logoutUser());
        } 
     })
  }, [])

  return (
    <BrowserRouter>
    <div className="app">
        <Routes>
            <Route path='/payment' element={[<Header /> , <Payment /> ]} />
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
