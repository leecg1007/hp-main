import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCdNi3vZ8lRDqrVNcuSXbO_SD86_M2W1zQ",
    authDomain: "hplogin-573c2.firebaseapp.com",
    projectId: "hplogin-573c2",
    storageBucket: "hplogin-573c2.firebasestorage.app",
    messagingSenderId: "595586859260",
    appId: "1:595586859260:web:7ed3c5ffb55b6a52289779"
};

const firebaseApp = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);
export const fireStoreJob = getFirestore(firebaseApp);

//console.log("API KEY:", process.env.REACT_APP_FIREBASE_API_KEY);
//console.log("🔥 Firebase App Initialized:", firebaseApp.name); // "[DEFAULT]"라고 나옴

export {}


