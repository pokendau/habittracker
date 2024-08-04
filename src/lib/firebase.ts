import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { API_KEY, APP_ID, PROJECT_ID } from "$env/static/private";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'habit-tracker-f04a2.firebaseapp.com',
  projectId: PROJECT_ID,
  storageBucket: 'habit-tracker-f04a2.appspot.com',
  messagingSenderId: '588671153963',
  appId: APP_ID,
  measurementId: 'G-3ZHN3XBT1M'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

setPersistence(auth, browserLocalPersistence)
  .catch((error) => {
    console.log('Error in setting persistance ' + error)
  })
