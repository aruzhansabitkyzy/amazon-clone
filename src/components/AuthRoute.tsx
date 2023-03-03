import React, { useEffect , PropsWithChildren} from 'react';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import firebase from 'firebase/app';
import { FirebaseApp } from 'firebase/app';
import { is } from 'immer/dist/internal';
import {auth} from '../config/firebase';

export interface IAuthRouteProps extends PropsWithChildren {}; 

const AuthRoute:React.FunctionComponent<IAuthRouteProps> = (props) => {
    // const [user, setUser] = useState<firebase.User | null>(null);
     const {children} = props; 
     const navigate = useNavigate();
     const [loading, setLoading] = useState(true);
     
     
     useEffect(() => {
      console.log(JSON.stringify(localStorage.getItem('authenticated'))); 
        AuthCheck();
     }, [])

     function AuthCheck() {
        onAuthStateChanged(auth, (user) => {
          setLoading(false)
          if(user) {
            console.log('authorized');
          }
          else {
            console.log("unauthorized ");
            navigate('/login');
          }
     }); 
     } 
     if(loading )  return <h1>Loading</h1>

     return <> {children} </>
     
}
export default AuthRoute;