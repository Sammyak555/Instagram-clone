import Firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

// here i want to call seed file only once

const config={}

const firebase=Firebase.initializeApp(config)
const {FieldValue} =Firebase.firestore;
