import firebase from 'firebase/app'

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAabiiEH5cA5HdUiRsfKrv4YO90xLs-_1g",
    authDomain: "boutique-db-9228a.firebaseapp.com",
    projectId: "boutique-db-9228a",
    storageBucket: "boutique-db-9228a.appspot.com",
    messagingSenderId: "795705409345",
    appId: "1:795705409345:web:0b71db35d4709457f1abc0",
    measurementId: "G-Z98NFQMVQH"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    // if userAuth doesn't exist then null, return.
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    // if the user doesn't exist, create a new user function
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    };
    
    return userRef;
    console.log(snapShot);

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;