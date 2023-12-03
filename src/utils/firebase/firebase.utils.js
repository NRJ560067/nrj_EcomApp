//This is just a util for using firebase. It will not return any jsx .

import { initializeApp } from "firebase/app";
//This initializeApp function creates an app instance for you based of some type of config. This config is an object that allows us to attach this firebase app instance (above) to that instance that we have online (console of firebase.google.com).

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfUvO6-ZRa6UXnsRiktbhkVEdBUjKkOt0",
  authDomain: "ecom-app-db-263ae.firebaseapp.com",
  projectId: "ecom-app-db-263ae",
  storageBucket: "ecom-app-db-263ae.appspot.com",
  messagingSenderId: "1063733036009",
  appId: "1:1063733036009:web:d6cac9cf8ed5865c86c178",
};

// // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const provider2 = new GithubAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

//This initializes the authentication services. We use this const auth everytime we want to do something with authentication.
export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGithubPopup = () => signInWithPopup(auth, provider2);
//====================================================

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  //console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  // console.log(userSnapShot);
  // console.log(userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }
  return userDocRef;
};
