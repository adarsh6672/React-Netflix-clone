// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA61xsKHjDpzbaRNIKZBcgMKXjQz_zZQbw",
    authDomain: "netflix-react-clone-d6d54.firebaseapp.com",
    projectId: "netflix-react-clone-d6d54",
    storageBucket: "netflix-react-clone-d6d54.appspot.com",
    messagingSenderId: "427309100576",
    appId: "1:427309100576:web:75bd77ba8d4060dfded645"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);