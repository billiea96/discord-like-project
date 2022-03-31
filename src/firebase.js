import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

console.log(import.meta.env);

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth(app);

/**
 *
 * @param {string} path - A slash-separated path to a collection
 * @param {object} data - An Object containing the data for the new document.
 * @returns A Promise resolved with a DocumentReference pointing to the newly created document after it has been written to the backend (Note that it won't resolve while you're offline)
 */
const addData = async (path, data) => {
  try {
    const createdData = await addDoc(collection(db, path), data);

    return createdData;
  } catch (error) {
    throw new Error(error.message);
  }
};

const addMessage = async (id, data) => {
  try {
    const createdMessage = await addDoc(
      collection(db, "channels", id, "messages"),
      {
        ...data,
        timestamp: serverTimestamp(),
      }
    );

    return createdMessage;
  } catch (error) {
    throw new Error(error.message);
  }
};

/**
 *
 * @param {string} path - A slash-separated path to a collection
 * @returns A firestore.QuerySnapshot (if a query is specified), a boolean to indicate if the data is still being loaded and any firestore.FirestoreError returned by Firebase when trying to load the data
 */
const getData = (path) => {
  return useCollection(collection(db, path));
};

export { db, auth, addData, getData, addMessage };
