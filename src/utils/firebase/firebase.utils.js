//java-script file just to use firebase

import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';

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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup (auth, googleProvider);

export const signInWithGoogleRedirect = () => signInWithRedirect (auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {} ) => {
    if (!userAuth) return;
    
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef, {displayName, email, createAt, ...additionalInformation });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;

};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

