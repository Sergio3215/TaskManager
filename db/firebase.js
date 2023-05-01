import firebase, { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyAFOuyRXtO8j8qCelZQhzvCiXB-OZz924Q",
    authDomain: "tarea-de-prueba.firebaseapp.com",
    databaseURL: "https://tarea-de-prueba-default-rtdb.firebaseio.com",
    projectId: "tarea-de-prueba",
    storageBucket: "tarea-de-prueba.appspot.com",
    messagingSenderId: "699751530395",
    appId: "1:699751530395:web:b167933755959bf6006b3e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export  const db = getFirestore(app);

export default firebase