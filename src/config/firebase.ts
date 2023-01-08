import {initializeApp} from 'firebase/app';
import {getAuth } from 'firebase/auth';

const firebaseConfig = {
        apiKey: "AIzaSyBzj8OXDl_c4luXCl9Z3l4YCRVsLGwxI5k",
        authDomain: "clone-fc7dd.firebaseapp.com",
        projectId: "clone-fc7dd",
        storageBucket: "clone-fc7dd.appspot.com",
        messagingSenderId: "767138157282",
        appId: "1:767138157282:web:8d6d6d677b4a52915a84bb",
        measurementId: "G-HP0F4P9K4W"
}

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);