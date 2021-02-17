import firebase from 'firebase/app'

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyATgWFdIpsNy955nXjHwuoaDcR4h9-pNyo",
    authDomain: "boutique-db-801f0.firebaseapp.com",
    projectId: "boutique-db-801f0",
    storageBucket: "boutique-db-801f0.appspot.com",
    messagingSenderId: "344251560898",
    appId: "1:344251560898:web:b4b08ff98f145194a79c5b",
    measurementId: "G-S6HVPSE2JY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;