import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: 'AIzaSyCZx_JTB3_VRnetn0mwy6DjBcTxehf670I',
  authDomain: 'what-to-eat-55dd9.firebaseapp.com',
  projectId: 'what-to-eat-55dd9',
  storageBucket: 'what-to-eat-55dd9.appspot.com',
  messagingSenderId: '985901119162',
  appId: '1:985901119162:web:de60467fc28173a7e77483',
  measurementId: 'G-0NM3JXL7CR',
})

const auth = firebase.auth()
// const firestore = firebase.firestore()

const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <button type="button" onClick={signInWithGoogle}>
      Sign In
    </button>
  )
}

const SignOut = () => {
  const handleSignOut = () => auth.signOut()

  return (
    auth.currentUser && (
      <button type="button" onClick={handleSignOut}>
        Sign out
      </button>
    )
  )
}

const App = () => {
  const [user] = useAuthState(auth)
  return <div className="App">{user ? <SignOut /> : <SignIn />}</div>
}

export default App
