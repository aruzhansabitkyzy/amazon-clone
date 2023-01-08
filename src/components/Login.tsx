import '../style/Login.css';
import {Link, redirect} from 'react-router-dom';
import {useState} from 'react';
import Redirect from 'react-router-dom';

export const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const signIn = (e:React.FormEvent<HTMLInputElement>):void => {
         e.preventDefault();
   }
   const register = (e:React.FormEvent<HTMLInputElement>):void => {
         e.preventDefault();
   }

   return(
    <div className='login'>
        <Link to='/'>
             <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
        </Link>

        <div className='login__container'>
            <h1>Sign-in</h1>
            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button type='submit' onClick={(e) => signIn} className='login__signInButton'>Sign In</button>
            </form>
            <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest Ads Notice.
            </p>
            <Link to ='/register'><button type="submit" className='login__registerButton'>Create your Amazon account</button></Link>
        </div>
    </div>
   )
}