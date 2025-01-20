import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = { 
apiKey: "AIzaSyCmoK3BZJ3VNN6J_aEYOmHhmjP-oWaYKag",
authDomain: "placementproject-90098.firebaseapp.com",

projectId: "placementproject-90098",
storageBucket: "placementproject-90098.firebasestorage.app",
messagingSenderId: "167445192444",
appId: "1:167445192444:web:289b683147e573daf74179"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

