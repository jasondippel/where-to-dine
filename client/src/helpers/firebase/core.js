import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCZx_JTB3_VRnetn0mwy6DjBcTxehf670I',
  authDomain: 'what-to-eat-55dd9.firebaseapp.com',
  projectId: 'what-to-eat-55dd9',
  storageBucket: 'what-to-eat-55dd9.appspot.com',
  messagingSenderId: '985901119162',
  appId: '1:985901119162:web:de60467fc28173a7e77483',
  measurementId: 'G-0NM3JXL7CR',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app() // use if already initialized, otherwise get error about duplicate initialization
}

const auth = firebase.auth()
const firestore = firebase.firestore()

export { auth, firestore }
