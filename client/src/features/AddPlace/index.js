import { useState } from 'react'
import firebase from 'firebase/app'
import { auth, firestore } from 'helpers/firebase'

const AddPlace = () => {
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

export default AddPlace
