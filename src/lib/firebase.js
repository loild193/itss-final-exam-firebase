import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCo5a0saTsD5CSgVhERIbYo4BtPuuvKf6E',
  authDomain: 'itss-final-exam-firebase.firebaseapp.com',
  projectId: 'itss-final-exam-firebase',
  storageBucket: 'itss-final-exam-firebase.appspot.com',
  messagingSenderId: '288337867498',
  appId: '1:288337867498:web:b98624070de77e7fe6dd93',
  measurementId: 'G-CKXWL3DTE8',
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { auth, db, storage }
export default firebase
