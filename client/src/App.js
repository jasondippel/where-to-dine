import firebase from 'firebase/app'
import { string } from 'prop-types'
import { useState } from 'react'
import 'firebase/firestore'
import 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCZx_JTB3_VRnetn0mwy6DjBcTxehf670I',
    authDomain: 'what-to-eat-55dd9.firebaseapp.com',
    projectId: 'what-to-eat-55dd9',
    storageBucket: 'what-to-eat-55dd9.appspot.com',
    messagingSenderId: '985901119162',
    appId: '1:985901119162:web:de60467fc28173a7e77483',
    measurementId: 'G-0NM3JXL7CR',
  })
} else {
  firebase.app() // use if already initialized, otherwise get error about duplicate initialization
}

const auth = firebase.auth()
const firestore = firebase.firestore()

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

const Place = ({ name }) => <div>{name}</div>
Place.propTypes = {
  name: string,
}

const AddPlaceForm = () => {
  const [formValue, setFormValue] = useState('')
  const { uid } = auth.currentUser
  const userPlacesRef = firestore.collection(`user-data/${uid}/places`)

  const handleInputChnage = (e) => {
    setFormValue(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault() // prevent form submission from refreshing page
    await userPlacesRef.add({
      'created-at': firebase.firestore.FieldValue.serverTimestamp(),
      name: formValue,
      favourite: false,
      visited: false,
    })
    setFormValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={formValue} onChange={handleInputChnage} />
      <button type="submit">Add Place</button>
    </form>
  )
}

const Places = () => {
  const [user] = useAuthState(auth)
  const { uid } = user || {}
  const userPlacesRef = firestore.collection(`user-data/${uid}/places`)
  const query = userPlacesRef.orderBy('created-at', 'desc')
  const [places] = useCollectionData(query, { idField: 'id' })

  if (!user) return null

  return <> {places && places.map((p) => <Place {...p} key={p.id} />)} </>
}

const App = () => {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
      {user ? <SignOut /> : <SignIn />}

      {user && (
        <>
          <AddPlaceForm />
          <Places />
        </>
      )}
    </div>
  )
}

export default App
