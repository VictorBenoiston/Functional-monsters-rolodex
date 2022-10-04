import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDhtDDf8HR93x84ryBOQ52zh6OpP1c-5yA",
    authDomain: "monsters-rolodex-reactjs-1st.firebaseapp.com",
    projectId: "monsters-rolodex-reactjs-1st",
    storageBucket: "monsters-rolodex-reactjs-1st.appspot.com",
    messagingSenderId: "967077013607",
    appId: "1:967077013607:web:62e2eba0fb96fc459eccc2",
    measurementId: "G-74R5L18CFK"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export default signInWithGooglePopup
