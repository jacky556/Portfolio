//This file must locate with the same level of src(outmost) index.js

import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBeBEKSSxHKUsVdwmkSQItdggT6K3YQ9S4",
    authDomain: "backend-project-48aff.firebaseapp.com",
    projectId: "backend-project-48aff",
    storageBucket: "backend-project-48aff.appspot.com",
    messagingSenderId: "1004128184399",
    appId: "1:1004128184399:web:15ec608726fd08b3d3223a",
    measurementId: "G-SLQXT3XCF1"
};

const app = initializeApp(firebaseConfig);

export default getFirestore();