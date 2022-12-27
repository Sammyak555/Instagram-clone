// import Firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/firestore';
import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { seedDatabase } from '../seed';
// here i want to call seed file only once

const config={
    apiKey: "AIzaSyD97Dr9TEPr3IbvI43JYaGgFqT7IICpG0o",
  authDomain: "instagram-clone-44ca2.firebaseapp.com",
  projectId: "instagram-clone-44ca2",
  storageBucket: "instagram-clone-44ca2.appspot.com",
  messagingSenderId: "41126079353",
  appId: "1:41126079353:web:d316fe225f4d2661b9dda8"
}
export const firebase = Firebase.initializeApp(config);
const storage = Firebase.firestore;
console.log(storage)
export const  {FieldValue}  = Firebase.firestore;

 console.log('firebase',firebase)
    seedDatabase(firebase)
 