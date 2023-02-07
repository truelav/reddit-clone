import { initializeApp, getApp, getApps } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {}

//initialize Firebase for Server Side Rendering
const app = initializeApp