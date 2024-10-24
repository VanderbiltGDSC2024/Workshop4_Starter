// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

let app;
let db;
let auth;

try {
  // Initialize Firebase app
  app = initializeApp(firebaseConfig);

  // Initialize Firestore and Auth
  db = getFirestore(app);
  auth = getAuth(app);

  console.log("Firebase successfully initialized.");
} catch (error) {
  console.error("Firebase initialization error:", error);

  // Optionally, you can handle this more gracefully (e.g., display a message to the user)
  alert("Error initializing Firebase. Please check your configuration.");
}

const provider = new GoogleAuthProvider();

const signIn = async (setUserName, setPhotoURL) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    // Set the display name in the parent component
    setUserName(user.displayName);
    setPhotoURL(user.photoURL);

  } catch (error) {
    console.error("Error during sign-in: ", error.message);
  }
};

export { db, signIn };
