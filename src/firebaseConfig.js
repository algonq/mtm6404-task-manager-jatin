// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { enableIndexedDbPersistence } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCYAyLNycBJy54gSmPcSlhphbSJ58buoxM",
    authDomain: "task-manager-b8d0d.firebaseapp.com",
    projectId: "task-manager-b8d0d",
    storageBucket: "task-manager-b8d0d.firebasestorage.app",
    messagingSenderId: "482303642249",
    appId: "1:482303642249:web:800bf139ce435dba405458",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Enable offline persistence
enableIndexedDbPersistence(db).catch((err) => {
  console.error("Firebase persistence error:", err);
});

export { db };
