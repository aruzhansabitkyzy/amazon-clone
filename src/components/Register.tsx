import '../style/Login.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import '../style/Register.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {auth} from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export const Register = () => {
   const [contact, setContact] = useState('');
   const navigate = useNavigate();
   const [password, setPassword] = useState('');
   const [rePassword, setRePassword] = useState('');
   const [error, setError] = useState("");




   async function  register(e:any) {
    e.preventDefault();
      console.log("reg")
    if(password == rePassword) {
      console.log(contact, password)
       await createUserWithEmailAndPassword(auth, contact, password)
       .then((user) => {
         console.log("then block executing")
         console.log(user + " is user")
          if(user) {
            console.log("navigate before")
            navigate("/");
            console.log("navigate after")
          }
       })
       .catch((error) => {
          setError(JSON.stringify(error));
       })
    }
     
   }

   return(
    <div className='register'>
        <Link to='/'>
             <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
        </Link>
        <div className='register__container'>
            <h1>Create account</h1>
            <form onSubmit={(e) => {register(e)}}> 
                <h5>Email</h5>
                <input type='text' value={contact} onChange={(e) => setContact(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <h5>Re-enter password</h5>
                <input type='password' value={rePassword} onChange={(e) => setRePassword(e.target.value)}/>
                <input type="submit" className='register__registerButton' value={'Continue'}  /> 
            </form>
                <p>By creating an account, you agree to AMAZON FAKE CLONE's Conditions of Use and Privacy Notice.</p>
                <p>Already have an account? <Link to='/login'>Sign in</Link></p>
        </div>
    </div>
   )
}