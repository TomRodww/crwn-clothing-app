//import { useEffect } from "react";
//import { getRedirectResult } from "firebase/auth";

import { 
    auth,
    signInWithGooglePopup, 
    //signInWithGoogleRedirect, 
    createUserDocumentFromAuth,

} from "../../utils/firebase/firebase.utils";
import { setDoc } from "firebase/firestore";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    
    // useEffect(() => {
    //     (async () => {
    //         const response = await getRedirectResult(auth);

    //         if(response) {
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //         //console.log(response);

    //     })();

    //     return () => {
    //         getRedirectResult(auth);

    //     };

    // }, [] );

    // useEffect(() => {
    //     // declare the data fetching function
    //     const fetchData = async () => {
    //       const data = await fetch('https://yourapi.com');
    //     }

// const logGoogleRedirectUser = async () => {
//     const {user} = await signInWithGoogleRedirect();
//     //const userDocRef = await createUserDocumentFromAuth(user);
//     console.log(user);
// };
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        //console.log(user);
    };



    return (
        <div>
            <h1> Sign In Page </h1>

            <button onClick = {logGoogleUser} >
                Sign in with Google Popup
            </button>

            <SignUpForm />

            {/* <button onClick = {signInWithGoogleRedirect} >
                Sign in with Google Redirect
            </button> */}
        </div>
    )
}

export default SignIn;