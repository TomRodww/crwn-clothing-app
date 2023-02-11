//java-script file just to use firebase

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyALKXVBlNSXQbifQLrgHKPbmrpZtTE1mSQ",
    authDomain: "crwn--clothing-db-53aee.firebaseapp.com",
    projectId: "crwn--clothing-db-53aee",
    storageBucket: "crwn--clothing-db-53aee.appspot.com",
    messagingSenderId: "168023474860",
    appId: "1:168023474860:web:92e2c21f9d9fab06641509"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup (auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {displayName, email, createAt });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;



};



