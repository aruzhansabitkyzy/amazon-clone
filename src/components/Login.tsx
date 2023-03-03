import '../style/Login.css';
import {Link, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {auth} from '../config/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { redirect } from 'react-router-dom';

export const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [logged, setLogged] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| ''));
   const navigate = useNavigate();

//    useEffect(() => 
//    {
//         if(logged != '') {
//             navigate("/");
//         }
//    }, [])

  
   async function signIn(e: React.FormEvent<HTMLFormElement>) :  Promise<void>{
      e.preventDefault();
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)  => {
            const user= userCredential.user;
            if(user) { 
                console.log("logged")
                navigate("/");
                localStorage.setItem('authenticated' , JSON.stringify(user))
                setLogged(user + "")
            }
            console.log(user);
        })
        .catch((error) => {
            console.log(error);
        })
   }



   return(
    <div className='login'>
       
        <Link to='/'>
             <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
        </Link>
        <div className='login__container'>
            <h1>Sign-in</h1>
            <form onSubmit={(e) => signIn(e)}> 
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

                <input type='submit' className='login__signInButton' value ={'Sign In'}/>
            </form> 
            <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                see our Privacy Notice, our Cookies Notice and our Interest Ads Notice.
            </p>
            <Link to ='/register'><button type="submit" className='login__registerButton'>Create your Amazon account</button></Link>
        </div>
    </div>
    
   )
}