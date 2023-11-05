import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDqgK9xEjPFW8exJq7DKZ4DD6lrxZvkW4c",
    authDomain: "hidden-terrain-368722.firebaseapp.com",
    projectId: "hidden-terrain-368722",
    storageBucket: "hidden-terrain-368722.appspot.com",
    messagingSenderId: "383863329314",
    appId: "1:383863329314:web:3f6ca8fa70d7d50231f07b"
  };
  
  
  const app = initializeApp(firebaseConfig);
  const db =getFirestore(app); 
  
  export {db};