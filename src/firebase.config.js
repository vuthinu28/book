import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCZSg_zXc6xkpBMplHjT5eHVHTeqBjIpFw",
  authDomain: "bookstoreweb-7a8fd.firebaseapp.com",
  projectId: "bookstoreweb-7a8fd",
  storageBucket: "bookstoreweb-7a8fd.appspot.com",
  messagingSenderId: "416958666728",
  appId: "1:416958666728:web:23041854f19c0c0608f65d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app
