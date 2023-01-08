import '../style/Login.css';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import '../style/Register.css';
import {auth} from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const Register = () => {
   const [contact, setContact] = useState('');
   const [password, setPassword] = useState('');
   const [rePassword, setRePassword] = useState('');

   const register = async (e:React.FormEvent<HTMLInputElement>) =>{
       e.preventDefault();
       try {
        console.log("not created")
        const user = await createUserWithEmailAndPassword(auth, contact, password);
        console.log(user);
       }
       catch(err) {
           console.log(err);    
       }
   }

   return(
    <div className='register'>
        <Link to='/'>
             <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
        </Link>

        <div className='register__container'>
            <h1>Create account</h1>
            <form> 
                <h5>Email</h5>
                <input type='text' value={contact} onChange={(e) => setContact(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <h5>Re-enter password</h5>
                <input type='password' value={rePassword} onChange={(e) => setRePassword(e.target.value)}/>
                <button type="submit" onClick={e =>register} className='register__registerButton'>Continue</button> 
            </form>
                <p>By creating an account, you agree to AMAZON FAKE CLONE's Conditions of Use and Privacy Notice.</p>
                <p>Already have an account? <Link to='/login'>Sign in</Link></p>
        </div>
    </div>
   )
}