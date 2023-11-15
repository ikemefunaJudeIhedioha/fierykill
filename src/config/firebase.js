import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore'



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBussBgsZKZWTx0OYpCVEr8ibyqh_QK5fI",
    authDomain: "hosting-students.firebaseapp.com",
    projectId: "hosting-students",
    storageBucket: "hosting-students.appspot.com",
    messagingSenderId: "372141768992",
    appId: "1:372141768992:web:48b4c5fb9e44e1a4539745"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// export const db = getFirestore(app)
