import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyB5WEfLaztudI4aiPjhCTl047t6I4m2Gdw',
  authDomain: 'todolist-cb149.firebaseapp.com',
  projectId: 'todolist-cb149',
  storageBucket: 'todolist-cb149.appspot.com',
  messagingSenderId: '773855253810',
  appId: '1:773855253810:web:531d927d844c782e5b332b',
  measurementId: 'G-9YD7PFWRZ2',
})
const db = firebaseApp.firestore()
export default db
