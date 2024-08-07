// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVFm059vOnen82gF6Dupe798zC0FG0Jk0",
  authDomain: "inventory-management-e5966.firebaseapp.com",
  projectId: "inventory-management-e5966",
  storageBucket: "inventory-management-e5966.appspot.com",
  messagingSenderId: "869823905495",
  appId: "1:869823905495:web:beac75529d2ec64fdbfa92",
  measurementId: "G-4H7HKLVSHW"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export { firestore }