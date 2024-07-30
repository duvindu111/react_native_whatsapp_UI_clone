// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth , getReactNativePersistence, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0xN_VuSW8cnUzYF_LaGDkxE6nPwTizeM",
    authDomain: "whatsapp-clone-duvindu.firebaseapp.com",
    projectId: "whatsapp-clone-duvindu",
    storageBucket: "whatsapp-clone-duvindu.appspot.com",
    messagingSenderId: "906462752534",
    appId: "1:906462752534:web:527cc7e39e917e4c0cea37"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);  // export the app to use in other files
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});
export const db = initializeFirestore(app, { experimentalForceLongPolling: true, })  // export the db to use in other files

export function signIn(email, password){
    return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password){
    return createUserWithEmailAndPassword(auth, email, password);
}