import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDDkAqHlby62BcbG4-Nsqia5b-w78b24jE",
    authDomain: "proyectoreact-b95b8.firebaseapp.com",
    projectId: "proyectoreact-b95b8",
    storageBucket: "proyectoreact-b95b8.appspot.com",
    messagingSenderId: "1082982775984",
    appId: "1:1082982775984:web:fd12f13751414aff2d0f75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app