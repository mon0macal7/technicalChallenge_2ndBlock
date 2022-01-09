// Importando firebase al proyecto

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBUAKe4l3D5Ywwyb_OCL1v_k5aZVYgvNWk",
  authDomain: "my-notes-app-56997.firebaseapp.com",
  projectId: "my-notes-app-56997",
  storageBucket: "my-notes-app-56997.appspot.com",
  messagingSenderId: "125457181111",
  appId: "1:125457181111:web:3c8cf1475f269a530ba032",
  measurementId: "G-WKE54WP6VM",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
